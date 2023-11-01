import { lazy } from 'react';
import { type IRoute } from 'types/models/route';
import Loadable from 'components/Loaders/Loadable';

// export lazy route
const RoleManagement = Loadable(
	lazy(
		async () => await import('modules/Management/RoleManagement/components'),
	),
);

const ROLE_MANAGEMENT_ROUTES: IRoute[] = [
	{
		path: 'role-management',
		element: RoleManagement,
		name: 'role Management',
		roles: [],
		private: true,
	},
];

export default ROLE_MANAGEMENT_ROUTES;
