import { useState } from 'react';
import {
	Flex,
	IconButton,
	useTheme,
	Box,
	Text,
	Tooltip,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
} from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';
import { Icon, Modal } from 'components';

export interface ActionProps {
	name: string | ((data?: any) => string);
	handleClick: (data: any) => void;
	isDisabled?: (data: any) => boolean;
	isShown?: boolean;
	showConfirmationModal?: boolean;
}
const getActionProps = (type: string): Record<string, any> => {
	const colors = [
		{
			name: 'print',
			icon: 'printer',
			color: 'black',
			opacity: '500',
		},
		{
			name: 'import',
			icon: 'import-2',
			color: 'tertiary',
			opacity: '500',
		},
		{
			name: 'delete',
			icon: 'trash',
			color: 'red',
			opacity: '500',
		},
		{
			name: 'archive',
			icon: 'archive-2',
			color: 'primary',
			opacity: '500',
		},
		{
			name: 'view',
			icon: 'eye',
			color: 'secondary',
			opacity: '500',
		},
		{
			name: 'more',
			icon: 'more',
			color: 'secondary',
			opacity: '500',
		},
		{
			name: 'edit',
			icon: 'edit-2',
			color: 'tertiary',
			opacity: '500',
		},
		{
			name: 'activate',
			icon: 'lock',
			color: 'black',
			opacity: '500',
		},
		{
			name: 'download',
			icon: 'cloud-download',
			color: 'green',
			opacity: '500',
		},
	];
	const selectedAction = colors?.filter(
		color => type?.toLowerCase() === color?.name?.toLowerCase(),
	)[0];
	return (
		selectedAction ?? {
			name: 'warning-2',
			icon: 'warning-2',
			color: 'red',
			opacity: '500',
		}
	);
};

const ActionButtons = ({
	actions,
	data,
}: {
	actions: ActionProps[];
	data: any;
}): JSX.Element => {
	const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
		useState<boolean>(false);
	const [selectedActionData, setSelectedActionData] = useState<any>(null);
	const theme = useTheme();
	const { t } = useTranslation();

	const handLeClickWithConfirmation = (action: ActionProps): void => {
		setIsConfirmationModalOpen(true);
		setSelectedActionData(action);
	};

	const handleConfirm = (): void => {
		setIsConfirmationModalOpen(false);
		selectedActionData?.handleClick(data);
	};

	return (
		<Flex gap={2}>
			{actions?.map(({ isShown = true, ...action }) =>
				isShown ? (
					action?.name === 'more' ? (
						<Menu key={action?.name} autoSelect={false} placement='bottom-end'>
							<MenuButton>
								<IconButton
									aria-label={action?.name}
									bg='red'
									icon={
										<Icon
											color={'black'}
											displayName={action?.name}
											boxSize='20px'
											overflow='visible'
											position='relative'
											insetStart='-1px'
										/>
									}
								/>
							</MenuButton>
							<MenuList zIndex={9} ringColor={'red'}>
								{['Import', 'Export', 'Print'].map((item, index) => (
									<MenuItem
										key={index}
										onClick={(): void => console.log(item, 'clicked!')}>
										{item}
									</MenuItem>
								))}
							</MenuList>
						</Menu>
					) : (
						<>
							<Tooltip
								hasArrow
								label={
									typeof action?.name === 'string'
										? t(action?.name)
										: t(action?.name(data))
								}
								bg='gray.300'
								color='black'>
								<IconButton
									aria-label={
										typeof action?.name === 'string'
											? action?.name
											: action?.name(data)
									}
									bg='Purple'
									key={
										typeof action?.name === 'string'
											? action?.name
											: action?.name(data)
									}
									onClick={(): void => {
										action?.showConfirmationModal
											? handLeClickWithConfirmation(action)
											: action?.handleClick(data);
									}}
									isDisabled={
										action?.isDisabled ? action?.isDisabled(data) : false
									}
									icon={
										<Icon
											color={
												theme.colors[
													getActionProps(
														typeof action?.name === 'string'
															? action?.name
															: action?.name(data),
													)?.color
												][
													getActionProps(
														typeof action?.name === 'string'
															? action?.name
															: action?.name(data),
													)?.opacity
												]
											}
											displayName={
												getActionProps(
													typeof action?.name === 'string'
														? action?.name
														: action?.name(data),
												).icon
											}
											boxSize='20px'
											overflow='visible'
											position='relative'
											insetStart='-1px'
										/>
									}
								/>
							</Tooltip>
							<Modal
								isOpen={isConfirmationModalOpen}
								onClose={(): void => {
									setIsConfirmationModalOpen(false);
								}}
								title={t('CSA.COMMON.CONFIRMATION')}
								renderContent={
									<Box>
										<Flex>
											<WarningTwoIcon />
											<Text fontFamily='rubik-regular' fontSize='.9rem' ml='4'>
												{t('CSA.COMMON.ARE_YOU_SURE')}
											</Text>
										</Flex>

										<Flex gap={15} justifyContent={'center'}>
											<Button onClick={(): void => handleConfirm()}>
												{t('YES')}
											</Button>
											<Button
												color='primary.500'
												border='1px solid '
												borderColor='primary.500'
												colorScheme={'transparent'}
												onClick={(): void => {
													setIsConfirmationModalOpen(false);
												}}>
												{t('NO')}
											</Button>
										</Flex>
									</Box>
								}
							/>
						</>
					)
				) : (
					<></>
				),
			)}
		</Flex>
	);
};

export default ActionButtons;
