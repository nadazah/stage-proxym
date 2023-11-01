import type { IUser } from 'types';

declare namespace IReduxUser {
	export interface ICreateUserPayload {
		id: number;
		name: string;
		job: string;
	}

	export interface IInitialState {
		users: IUser[];
	}
}

export { IReduxUser };
