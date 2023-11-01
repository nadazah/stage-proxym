import { useQuery } from '@apollo/client';
import UserItem from './UserItem';
import { getAllUsersQuery } from '../graphQL/candidates_queries';
import { DataTable } from 'components';
import type { Columns } from 'components/Table';

const ProfileContainer = (): JSX.Element => {
	const { data, loading, error, refetch } = useQuery(getAllUsersQuery);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	const tableColumns: Columns[] = [
		{
			header: 'ID',
			accessor: 'id',
		},
		{
			header: 'Name',
			accessor: 'name',
		},
		{
			header: 'E-mail',
			accessor: 'email',
		},
	];

	return (
		<>
			<p style={{ textAlign: 'center' }}>GRAPHQL DATA</p>
			<DataTable
				hasBorder
				columns={tableColumns}
				data={data?.users ?? []}
				isLoading={false}
				paginationOptions={{
					paginationFront: true,
				}}
				refetch={refetch}
			/>
			{data && (
				<ul>
					{data.users?.map(
						(user, i) => user && <UserItem user={user} key={`user-${i}`} />,
					)}
				</ul>
			)}
		</>
	);
};

export default ProfileContainer;
