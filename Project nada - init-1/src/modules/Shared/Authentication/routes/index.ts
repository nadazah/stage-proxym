import Loadable from 'components/Loaders/Loadable';
import { type IRoute } from 'types/models/route';
import { lazy } from 'react';

const Authentication = Loadable(
	lazy(() => import('modules/Shared/Authentication/components/Auth'),
	),
);

const AUTH_ROUTES: IRoute[] = [
	{
		path: 'login',
		element: Authentication,
		name: 'Authentication',
		roles: [],
		private: false,
	},
];

export default AUTH_ROUTES;
