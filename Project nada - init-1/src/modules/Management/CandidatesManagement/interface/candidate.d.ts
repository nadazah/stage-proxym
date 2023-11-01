import type { IUser } from '@Interfaces/model/user';

declare namespace IReduxCandidate {
	export interface ICreateCandidatePayload {
		id: number;
		name: string;
		job: string;
	}

	export interface IInitialState {
		data: IUser[];
	}
}

export { IReduxCandidate };
