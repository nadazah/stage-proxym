declare namespace IReduxSession {
	export interface ISession {
		id: string;
	}

	export interface ICreateSessionPayload {
		id: number;
	}

	export interface IInitialState {
		data: ISession[];
	}
}

export { IReduxSession };
