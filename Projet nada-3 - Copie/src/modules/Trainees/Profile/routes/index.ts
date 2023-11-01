import { lazy } from 'react';
import { type IRoute } from 'types/models/route';
import Loadable from 'components/Loaders/Loadable';

// export lazy route
const ProfileContainer = Loadable(
	lazy(async () => await import('modules/Trainees/Profile/components')),
);

const PROFILE_ROUTES: IRoute[] = [
	{
		path: 'profile',
		element: ProfileContainer,
		name: 'Profile',
		roles: [],
		private: true,
	},
];

export default PROFILE_ROUTES;
