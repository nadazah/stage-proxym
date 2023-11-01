import Loadable from 'components/Loaders/Loadable';
import { type IRoute } from 'types/models/route';
import { lazy } from 'react';

const HomePage = Loadable(
	lazy(async () => await import('modules/Shared/HomePage/components')),
);

const HOME_PAGE_ROUTES_PUBLIC: IRoute[] = [
	{
		path: 'home-page',
		element: HomePage,
		name: 'HomePage',
		roles: [],
		private: false,
	},
];

const HOME_PAGE_ROUTES_PRIVATE: IRoute[] = [
	{
		path: 'home-page',
		element: HomePage,
		name: 'HomePage',
		roles: [],
		private: true,
	},
];

export { HOME_PAGE_ROUTES_PUBLIC, HOME_PAGE_ROUTES_PRIVATE };
