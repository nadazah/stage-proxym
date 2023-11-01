import type { IRole } from 'types';

declare namespace IReduxRole {
	export interface ICreateSessionPayload {
		id: number;
	}

	export interface IInitialState {
		data: IRole[];
	}
}

export { IReduxRole };
