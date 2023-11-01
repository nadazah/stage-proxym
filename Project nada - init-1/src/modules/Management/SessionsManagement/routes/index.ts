import { lazy } from 'react';
import { type IRoute } from 'types/models/route';
import Loadable from 'components/Loaders/Loadable';

// export lazy route
const SessionsManagement = Loadable(
	lazy(
		async () =>
			await import('modules/Management/SessionsManagement/components'),
	),
);

const AddSession = Loadable(
	lazy(
		async () =>
			await import('modules/Management/SessionsManagement/components/AddSession'),
	),
);

const EditSession = Loadable(
	lazy(
		async () =>
			await import('modules/Management/SessionsManagement/components/EditSession'),
	),
);


const SESSION_MANAGEMENT_ROUTES: IRoute[] = [
	{
		path: 'sessions-management',
		element: SessionsManagement,
		name: 'Sessions Management',
		roles: [],
		private: true,
	},
	{
		path: 'sessions-management/add',
		element: AddSession,
		name: 'AddSession',
		roles: [],
		private: true,
	},
	{
		path: 'sessions-management/edit/:sessionId',
		element: EditSession,
		name: 'EditSession',
		roles: [],
		private: true,
	},
];

export default SESSION_MANAGEMENT_ROUTES;
