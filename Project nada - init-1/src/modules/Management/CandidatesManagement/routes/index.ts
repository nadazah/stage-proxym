import { lazy } from 'react';
import { type IRoute } from 'types/models/route';
import Loadable from 'components/Loaders/Loadable';

// export lazy route
const CandidatesManagement = Loadable(
	lazy(
		async () =>
			await import('modules/Management/CandidatesManagement/components'),
	),
);

const CANDIDATES_MANAGEMENT_ROUTES: IRoute[] = [
	{
		path: 'candidates-management',
		element: CandidatesManagement,
		name: 'Candidates Management',
		roles: [],
		private: true,
	},
];

export default CANDIDATES_MANAGEMENT_ROUTES;
