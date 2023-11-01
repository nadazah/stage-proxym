import type { FragmentType } from 'gql';
import { useFragment } from 'gql';
import { UserFragment } from '../graphQL/candidates_queries';
const UserItem = (props: {
	user: FragmentType<typeof UserFragment>;
}): JSX.Element => {
	const user = useFragment(UserFragment, props.user);
	return (
		<div>
			<h3>{user.name}</h3>
			<p>{user.email}</p>
		</div>
	);
};

export default UserItem;
