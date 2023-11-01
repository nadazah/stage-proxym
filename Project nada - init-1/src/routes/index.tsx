import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import GLOBAL_ROUTES from './routes';
import { type IRoute } from 'types/models/route';
import PublicLayout from 'layout/PublicLayout';
import ManagementLayout from 'layout/PrivateLayout/ManagementLayout';
import TraineesLayout from 'layout/PrivateLayout/TraineesLayout';
// import NotFound from 'components/NotFound';
import ProtectedRoute from './ProtectedRoute';
import AccessDenied from 'components/AccessDenied';
import NotFound from 'components/NotFound';
// import AccessDenied from 'components/AccessDenied';

const renderRoutes = (
	routes: IRoute[],
): Array<Pick<IRoute, 'path' | 'element'>> => {
	const _routes: any[] = [];
	routes.map((route: IRoute, index: number) => {
		const renderRoute = route?.private ? (
			<ProtectedRoute key={index} route={route} roles={route?.roles} />
		) : (
			React.createElement(route.element, { name: route?.name })
		);

		return _routes.push({
			path: route?.path,
			element: renderRoute,
		});
	});
	return _routes;
};

const AppRoutes = createBrowserRouter([
	{
		path: '/private/admin/*',
		element: <ManagementLayout />,
		children: [
			{
				index: true,
				element: <Navigate to={'/profile'} replace />,
			},
			...renderRoutes(GLOBAL_ROUTES.PRIVATE),
		],
	},
	{
		path: '/private/trainee/*',
		element: <TraineesLayout />,
		children: [
			{
				index: true,
				element: <Navigate to={'/profile'} replace />,
			},
			...renderRoutes(GLOBAL_ROUTES.PRIVATE),
		],
	},
	{
		path: '/public',
		element: <PublicLayout />,
		children: [...renderRoutes(GLOBAL_ROUTES.PUBLIC)],
	},
	{ path: '/access-denied', element: <AccessDenied /> },
	{ path: '*', element: <NotFound /> },
]);

export default AppRoutes;
