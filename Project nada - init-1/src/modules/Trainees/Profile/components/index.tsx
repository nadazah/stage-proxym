import { useQuery } from '@apollo/client';
import Item from './Item';
import { getAllUsersQuery } from '../graphQL/users_queries';

const ProfileContainer = (): JSX.Element => {
	const { data, loading, error } = useQuery(getAllUsersQuery);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	return (
		<>
			<p style={{ textAlign: 'center' }}>GRAPHQL DATA</p>
			{data && (
				<ul>
					{data.users?.map(
						(user, i) => user && <Item user={user} key={`user-${i}`} />,
					)}
				</ul>
			)}
		</>
	);
};

export default ProfileContainer;
