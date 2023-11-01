import { graphql } from 'gql';

export const getAllUsersQuery = graphql(/* GraphQL */ `
	query getAllUsers {
		users {
			...UserItem
		}
	}
`);

export const UserFragment = graphql(/* GraphQL */ `
	fragment UserItem on User {
		id
		firstName
		email
	}
`);
