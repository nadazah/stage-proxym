declare namespace IReduxSession {
	export interface ISession {
		id: string;
		intit: string;
		debut: string;
		fin: string;
		postulation: string;
		stagiairesentretenus: string;
		stagiairesvalides: string;
		sujets: string;
		description: string;
	}
	

	export interface ICreateSessionPayload {
		id: number;
	}

	export interface IInitialState {
		
		data: ISession[];
		status: 'idle' | 'loading' | 'succeeded' | 'failed';
	    error: null | string | undefined;
	
	}
}

export { IReduxSession };
