import type { IUser } from 'types/models/user';

declare namespace IReduxAuth {
	export interface IInitialState {
		user: IUser;
		isAuthenticated: boolean;
		isGuest: boolean;
	}
	export interface ICreateUserResponse {
		user: IUser;
	}
}

export { IReduxAuth };
