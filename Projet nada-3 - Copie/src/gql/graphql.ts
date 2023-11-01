/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateSessionDto = {
  debut: Scalars['String']['input'];
  description: Scalars['String']['input'];
  fin: Scalars['String']['input'];
  intit: Scalars['String']['input'];
  postulation: Scalars['String']['input'];
  stagiairesentretenus: Scalars['String']['input'];
  stagiairesvalides: Scalars['String']['input'];
  sujets: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  ajouterSession: Session;
  editerSession: Session;
  supprimerSession: Session;
};


export type MutationAjouterSessionArgs = {
  nouvelleSession: CreateSessionDto;
};


export type MutationEditerSessionArgs = {
  id: Scalars['String']['input'];
  sessionEditee: UpdateSessionDto;
};


export type MutationSupprimerSessionArgs = {
  id: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  session: Session;
  sessions: Array<Session>;
};


export type QuerySessionArgs = {
  id: Scalars['String']['input'];
};

export type Session = {
  __typename?: 'Session';
  debut: Scalars['String']['output'];
  description: Scalars['String']['output'];
  fin: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  intit: Scalars['String']['output'];
  postulation: Scalars['String']['output'];
  stagiairesentretenus: Scalars['String']['output'];
  stagiairesvalides: Scalars['String']['output'];
  sujets: Scalars['String']['output'];
};

export type UpdateSessionDto = {
  debut: Scalars['String']['input'];
  description: Scalars['String']['input'];
  fin: Scalars['String']['input'];
  intit: Scalars['String']['input'];
  postulation: Scalars['String']['input'];
  stagiairesentretenus: Scalars['String']['input'];
  stagiairesvalides: Scalars['String']['input'];
  sujets: Scalars['String']['input'];
};

export type GetSessionByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetSessionByIdQuery = { __typename?: 'Query', session: { __typename?: 'Session', id: string, intit: string, debut: string, fin: string, postulation: string, stagiairesentretenus: string, stagiairesvalides: string, sujets: string, description: string } };

export type CreateSessionMutationVariables = Exact<{
  session: CreateSessionDto;
}>;


export type CreateSessionMutation = { __typename?: 'Mutation', ajouterSession: { __typename?: 'Session', intit: string, debut: string, fin: string, postulation: string, stagiairesentretenus: string, stagiairesvalides: string, sujets: string, description: string } };

export type UpdateSessionMutationVariables = Exact<{
  id: Scalars['String']['input'];
  session: UpdateSessionDto;
}>;


export type UpdateSessionMutation = { __typename?: 'Mutation', editerSession: { __typename?: 'Session', id: string, intit: string, debut: string, fin: string, postulation: string, stagiairesentretenus: string, stagiairesvalides: string, sujets: string, description: string } };

export type DeleteSessionMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteSessionMutation = { __typename?: 'Mutation', supprimerSession: { __typename?: 'Session', id: string } };


export const GetSessionByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSessionById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"session"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"intit"}},{"kind":"Field","name":{"kind":"Name","value":"debut"}},{"kind":"Field","name":{"kind":"Name","value":"fin"}},{"kind":"Field","name":{"kind":"Name","value":"postulation"}},{"kind":"Field","name":{"kind":"Name","value":"stagiairesentretenus"}},{"kind":"Field","name":{"kind":"Name","value":"stagiairesvalides"}},{"kind":"Field","name":{"kind":"Name","value":"sujets"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetSessionByIdQuery, GetSessionByIdQueryVariables>;
export const CreateSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"session"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSessionDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ajouterSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"nouvelleSession"},"value":{"kind":"Variable","name":{"kind":"Name","value":"session"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"intit"}},{"kind":"Field","name":{"kind":"Name","value":"debut"}},{"kind":"Field","name":{"kind":"Name","value":"fin"}},{"kind":"Field","name":{"kind":"Name","value":"postulation"}},{"kind":"Field","name":{"kind":"Name","value":"stagiairesentretenus"}},{"kind":"Field","name":{"kind":"Name","value":"stagiairesvalides"}},{"kind":"Field","name":{"kind":"Name","value":"sujets"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<CreateSessionMutation, CreateSessionMutationVariables>;
export const UpdateSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"session"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateSessionDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editerSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"sessionEditee"},"value":{"kind":"Variable","name":{"kind":"Name","value":"session"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"intit"}},{"kind":"Field","name":{"kind":"Name","value":"debut"}},{"kind":"Field","name":{"kind":"Name","value":"fin"}},{"kind":"Field","name":{"kind":"Name","value":"postulation"}},{"kind":"Field","name":{"kind":"Name","value":"stagiairesentretenus"}},{"kind":"Field","name":{"kind":"Name","value":"stagiairesvalides"}},{"kind":"Field","name":{"kind":"Name","value":"sujets"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<UpdateSessionMutation, UpdateSessionMutationVariables>;
export const DeleteSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"supprimerSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteSessionMutation, DeleteSessionMutationVariables>;