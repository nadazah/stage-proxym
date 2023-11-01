import { lazy } from 'react';
import { type IRoute } from 'types/models/route';
import Loadable from 'components/Loaders/Loadable';

// export lazy route
const DashboardContainer = Loadable(
	lazy(async () => await import('modules/Management/Dashboard/components')),
);

const DASHBOARD_ROUTES: IRoute[] = [
	{
		path: 'dashboard',
		element: DashboardContainer,
		name: 'Dashboard',
		roles: [],
		private: true,
	},
];

export default DASHBOARD_ROUTES;
