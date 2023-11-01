/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
	  };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string | number; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	Date: { input: any; output: any };
};

export type Mutation = {
	__typename?: 'Mutation';
	createUser: User;
	deleteUser?: Maybe<User>;
	updateUser: User;
};

export type MutationCreateUserArgs = {
	input: NewUser;
};

export type MutationDeleteUserArgs = {
	id: Scalars['ID']['input'];
};

export type MutationUpdateUserArgs = {
	input: UpdateUser;
};

export type NewUser = {
	email: Scalars['String']['input'];
	firstName: Scalars['String']['input'];
};

export type Query = {
	__typename?: 'Query';
	getUserById?: Maybe<User>;
	users: Array<User>;
};

export type QueryGetUserByIdArgs = {
	id: Scalars['ID']['input'];
};

export type UpdateUser = {
	email?: InputMaybe<Scalars['String']['input']>;
	id: Scalars['ID']['input'];
	firstName?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
	__typename?: 'User';
	createdAt: Scalars['Date']['output'];
	email: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	firstName: Scalars['String']['output'];
	updatedAt: Scalars['Date']['output'];
};

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllUsersQuery = {
	__typename?: 'Query';
	users: Array<
		{ __typename?: 'User' } & {
			' $fragmentRefs'?: { UserItemFragment: UserItemFragment };
		}
	>;
};

export type UserItemFragment = {
	__typename?: 'User';
	id: string;
	firstName: string;
	email: string;
} & { ' $fragmentName'?: 'UserItemFragment' };

export const UserItemFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'UserItem' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'User' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'email' } },
				],
			},
		},
	],
} as unknown as DocumentNode<UserItemFragment, unknown>;
export const GetAllUsersDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'getAllUsers' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'users' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: { kind: 'Name', value: 'UserItem' },
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'UserItem' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'User' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'email' } },
				],
			},
		},
	],
} as unknown as DocumentNode<GetAllUsersQuery, GetAllUsersQueryVariables>;
