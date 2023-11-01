/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import {
	Thead,
	Tbody,
	Tr,
	chakra,
	Flex,
	VStack,
	Text,
	Box,
	IconButton,
} from '@chakra-ui/react';
import { RepeatIcon, TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import type { ColumnDef } from '@tanstack/react-table';
import {
	useReactTable,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	createColumnHelper,
} from '@tanstack/react-table';
import ActionButtons from './ActionButtons';
import { StyledTable, StyledTd, StyledTh } from './styles';
import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Pagination from './Pagination';
import { isObjEmpty } from 'utils/functions';
import Loader from 'components/Loaders/Spinner/Spinner';
import type { ApolloQueryResult } from '@apollo/client';

export type DataTableProps<Data extends object> = {
	data: Data[];
	columns: ColumnDef<Data, any>[];
	title?: string;
	minH?: string;
	hasBorder?: boolean;
	isLoading?: boolean;
	paginationAction?: any;
	extraPaginationOptions?: Record<string, any>;
	payload?: any;
	refetch?: () => Promise<ApolloQueryResult<unknown>>;
	resetPagination?: boolean;
	setCurrentPage?: (data: number) => void;
	paginationOptions?: any;
};

type ActionsType = {
	name: string | ((data: any) => string);
	handleClick: (data: any) => void;
	isDisabled?: (data: any) => boolean;
	isShown?: boolean | ((data: any) => boolean);
};

export interface Columns {
	header: string;
	accessor: string;
	cell?: (x?: any) => JSX.Element | string;
	actions?: Array<ActionsType>;
	size?: number;
	getRowData?: boolean;
	customEvent?: (columnToAccess: string) => void;
	customArg?: (data: any) => any;
}
const DataTable = ({
	data,
	columns,
	title,
	payload,
	resetPagination,
	hasBorder = false,
	paginationAction,
	extraPaginationOptions = {},
	isLoading,
	minH,
	setCurrentPage,
	paginationOptions,
	refetch,
}: // ...rest
DataTableProps<any>): JSX.Element => {
	const currentPage: any = useRef(0);
	const pageCounter: any = useRef(0);
	const { t } = useTranslation();
	const dispatch = useDispatch();

	const columnHelper = createColumnHelper<typeof data>();
	const _actions: any = columns?.filter(
		(_col: any) => _col?.actions?.length,
	)[0];
	const customComponent: any = columns?.find((_col: any) => _col?.customArg);

	const displayedColumns =
		_actions &&
		_actions?.actions?.filter((act: ActionsType) => act?.isShown)?.length === 0
			? columns?.filter(col => col?.header !== 'Actions')
			: columns;

	const _columns: any = displayedColumns?.map((column: any) =>
		columnHelper.accessor(column?.accessor.toString(), {
			cell: info =>
				column?.getRowData
					? column?.cell(info?.row?.original)
					: column?.cell
					? column?.cell(info.getValue())
					: (isObjEmpty(info?.getValue() as Record<string, any>) ||
							!info.getValue()) &&
					  column?.header !== 'Actions'
					? '-'
					: info.getValue(),
			header: column?.header,

			size: column?.size,
		}),
	);
	const callApi = (page: number): void => {
		if (paginationOptions?.paginationFront) {
			table.setPageIndex(page);
			currentPage.current = page;
			pageCounter.current = page;

			return;
		}
		if (payload) {
			dispatch(paginationAction(payload, { page, size: 5 }));
		} else if (paginationAction?.custom) {
			paginationAction?.action({
				page,
				size: 5,
				...extraPaginationOptions.options,
			});
		} else
			dispatch(
				paginationAction({
					page,
					size: 5,
					...(!isObjEmpty(extraPaginationOptions.options) && {
						...extraPaginationOptions.options,
					}),
				}),
			);
	};

	const getPagination = (paginationOptions: any): Record<string, any> => {
		let props = {};
		if (paginationOptions?.paginationFront) {
			props = { lastPage: Math.ceil(data.length / 5) };
		} else if (paginationOptions.lastHref) {
			const lastPage =
				parseInt(
					paginationOptions.lastHref
						.split('&')
						.find((data: string) => data.includes('page='))
						.split('=')[1],
				) + 1;
			props = { ...props, lastPage, page: paginationOptions.page + 1 };
		} else props = { ...paginationOptions, page: paginationOptions.page + 1 };
		return props;
	};

	const renderFooter = (): JSX.Element => {
		return (
			<Flex
				bg='white.50'
				px={2}
				py={1}
				minWidth={0}
				justifyContent='space-between'
				alignItems={'center'}
				gridColumn={2}
				justifyItems={'center'}
				overflow='hidden'>
				{paginationOptions && (
					<Pagination
						page={1}
						apiCall={callApi}
						{...getPagination(paginationOptions)}
					/>
				)}
			</Flex>
		);
	};

	const table = useReactTable({
		columns: _columns,
		data,
		getCoreRowModel: getCoreRowModel(),
		// onSortingChange: setSorting,
		// getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		initialState: {
			pagination: {
				pageSize: 5,
				pageIndex: 0,
			},
		},
		state: {
			// sorting,
		},
	});

	useEffect(() => {
		if (resetPagination === true) {
			table.setPageIndex(0);

			currentPage.current = 0;
			pageCounter.current = 0;
		}
	}, [resetPagination]);

	useEffect(() => {
		if (data?.length && table.getRowModel().rows?.length === 0) {
			table.setPageIndex(0);
			currentPage.current = 0;
		}
	}, [data?.length === 0 && table.getRowModel().rows?.length === 0]);

	React.useLayoutEffect(() => {
		if (paginationAction && resetPagination !== true) {
			table.setPageIndex(currentPage.current);

			setCurrentPage && setCurrentPage(currentPage.current);
		}
	}, [
		currentPage.current,
		table.getState().pagination.pageIndex,
		pageCounter.current,
	]);

	return (
		<VStack alignItems='start' pt='2rem' w='100%'>
			{title && (
				<Text fontWeight='bold' textAlign='left' mb='1rem' mt='2rem'>
					{title}
				</Text>
			)}

			<Box
				w='100%'
				minH={minH ?? '35rem'}
				display='flex'
				flexDir='column'
				justifyContent='space-between'
				{...(hasBorder && {
					borderRadius: 8,
					border: '1px',
					borderColor: 'gray.200',
					padding: 5,
				})}
				overflow='auto'>
				{isLoading ? (
					<Box
						minH={minH ?? '35rem'}
						w='100%'
						display='flex'
						alignItems={'center'}
						justifyContent='center'>
						{/* <Spinner boxSize={'2rem'} /> */}
						<Loader boxSize='2rem' />
					</Box>
				) : (
					<>
						<Box display='flex' flexDir='column'>
							{refetch && (
								<IconButton
									alignSelf={'flex-end'}
									size='xs'
									aria-label='Refresh'
									icon={<RepeatIcon boxSize={5} />}
									onClick={(): void => {
										refetch();
									}}
								/>
							)}
							<StyledTable>
								<Thead>
									{table.getHeaderGroups().map(headerGroup => (
										<Tr key={headerGroup.id}>
											{headerGroup.headers.map(header => {
												const meta: any = header.column.columnDef.meta;
												return (
													<StyledTh
														key={header.id}
														onClick={header.column.getToggleSortingHandler()}
														isNumeric={meta?.isNumeric}>
														{flexRender(
															t(header.column.columnDef.header),
															header.getContext(),
														)}
														<chakra.span pl='4'>
															{header.column.getIsSorted() ? (
																header.column.getIsSorted() === 'desc' ? (
																	<TriangleDownIcon aria-label='sorted descending' />
																) : (
																	<TriangleUpIcon aria-label='sorted ascending' />
																)
															) : null}
														</chakra.span>
													</StyledTh>
												);
											})}
										</Tr>
									))}
								</Thead>
								<Tbody minH={minH ?? '35rem'}>
									{table.getRowModel().rows.map(row => {
										return (
											<Tr key={row.id}>
												{row.getVisibleCells().map(cell => {
													const meta: any = cell.column.columnDef.meta;
													return (
														<StyledTd
															key={cell.id}
															isNumeric={meta?.isNumeric}
															style={
																cell.id?.includes('_action')
																	? {
																			maxWidth: 200,
																			minWidth: 80,
																			width: 80,
																	  }
																	: {
																			width:
																				cell?.column?.getSize() !== 150
																					? cell?.column?.getSize()
																					: 200,
																	  }
															}>
															{customComponent &&
																cell.id?.includes('customComponent') &&
																customComponent.customArg({
																	...row?.original,
																	rowId: row?.id,
																})}
															{!cell.id?.includes('customComponent') &&
																flexRender(
																	cell.column.columnDef.cell,
																	cell.getContext(),
																)}
															{cell.id?.includes('_action') && (
																<ActionButtons
																	key={cell.id + Math.random()}
																	actions={_actions?.actions}
																	data={{ ...row?.original, rowId: row?.id }}
																/>
															)}
														</StyledTd>
													);
												})}
											</Tr>
										);
									})}
								</Tbody>
							</StyledTable>
						</Box>
						{data?.length === 0 && table.getRowModel().rows?.length === 0 && (
							// <NoDataFound />
							<Text>No Data Found</Text>
						)}
						{table.getRowModel().rows?.length ? renderFooter() : <></>}
					</>
				)}
			</Box>
		</VStack>
	);
};
export default React.memo(DataTable);
