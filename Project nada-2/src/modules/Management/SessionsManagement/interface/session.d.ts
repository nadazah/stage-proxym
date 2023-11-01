declare namespace IReduxSession {
	export interface ISession {
		id: string;
		intit: string;
		debut: string;
		fin: string;
		Postulation: string;
		StagiairesEntretenus: string;
		Stagiairesvalidés: string;
		Sujets: string;
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
