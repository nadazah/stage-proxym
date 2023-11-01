import { useNavigate } from 'react-router-dom';
import { DataTable } from 'components';
import type { Columns } from 'components/Table';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { deleteRow } from '../redux';
import { Flex, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import {
	deleteSessionMutation,
	getAllSessionsQuery,
} from '../graphQL/session_queries';
import { useMutation, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { sessionsFetched } from '../redux/session.slice';
const SessionsManagement = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const sessionsData = useAppSelector(state => state.session.data);
	const { loading, error, data, refetch } = useQuery(getAllSessionsQuery);
	const [deleteSession] = useMutation(deleteSessionMutation);

	useEffect(() => {
		refetch();
	}, []);
	useEffect(() => {
		if (data) {
			dispatch(sessionsFetched(data.sessions));
		}
	}, [data, dispatch]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	const handleDeleteClick = async data => {
		if (data.postulation === '0') {
			console.log(data)
			await deleteSession({
				variables: {
					id: data?.id,
				},
			});

			const deletedSessionId = data?.id;
			// Dispatch the deleteRow action from Redux store
			dispatch(deleteRow(deletedSessionId));
		}
	};

	const tableColumns: Columns[] = [
		{
			header: 'Intitulé',
			accessor: 'intit',
		},
		{
			header: 'Date de début',
			accessor: 'debut',
		},
		{
			header: 'Date de fin',
			accessor: 'fin',
		},
		{
			header: 'Postulation',
			accessor: 'postulation',
		},
		{
			header: 'Stagiaires Entretenus',
			accessor: 'stagiairesentretenus',
		},
		{
			header: 'Stagiaires validés',
			accessor: 'stagiairesvalides',
		},
		{
			header: 'Sujets',
			accessor: 'sujets',
		},
		{
			header: 'Actions',
			accessor: 'action',
			actions: [
				{
					name: 'edit',
					handleClick: data => {
						navigate(`edit/${data.id}`);
					},
					isShown: true,
				},
				{
					name: 'delete',
					handleClick: handleDeleteClick,
					isDisabled: data => data.postulation !== '0',
					isShown: true,
				},
			],
		},
	];
	
	console.log(sessionsData);
	return (
		<>
			<DataTable
				hasBorder
				columns={tableColumns}
				data={sessionsData ?? []}
				isLoading={false}
				paginationOptions={{
					paginationFront: true,
				}}
				// refetch={refetch}
			/>

			<Flex justifyContent='flex-end' py='5'>
				<Button
					as={RouterLink}
					to={'add'}
					colorScheme='purple'
					variant='solid'
					width='fit-content'>
					Ajouter une nouvelle session
				</Button>
			</Flex>
		</>
	);
};

export default SessionsManagement;
