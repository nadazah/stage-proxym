import { useNavigate } from 'react-router-dom';
import { DataTable } from 'components';
// import { getAllUsersQuery } from '../graphQL/session_queries';
// import { useQuery } from '@apollo/client';
import type { Columns } from 'components/Table';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { deleteRow } from '../redux';

const SessionsManagement = (): JSX.Element => {

	// const {loading} = useQuery(getAllUsersQuery);
	// if (loading) return <p>Loading...</p>;
	
	
	const dispatch = useAppDispatch();
    const navigate = useNavigate();
	const sessionsData = useAppSelector((state) => state.session.data)


	console.log(sessionsData);

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
			accessor: 'Postulation',
		},
		{
			header: 'Stagiaires Entretenus',
			accessor: 'StagiairesEntretenus',
		},
		{
			header: 'Stagiaires validés',
			accessor: 'Stagiairesvalidés',
		},
		{
			header: 'Sujets',
			accessor: 'Sujets',
		},
		{
			header: 'Actions',
			accessor: 'action',
			actions: [
				{
					name: 'edit',
					handleClick: data =>  {
						navigate(`edit/${data.id}`);
					},
					isShown: true,
				},
				{
					name: 'delete',
					handleClick: data => {
						dispatch(deleteRow(data?.id));
					},
					isDisabled: (data) => data.Postulation != 0,
					isShown: true 
				},
			],
		},
	];

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
			{sessionsData && (
				<ul>
					{sessionsData?.map((session) => (
						<li key={session.id}>	
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default SessionsManagement;
