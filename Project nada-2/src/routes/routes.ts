import { type IRoute } from 'types/models/route';
import AUTH_ROUTES from 'modules/Shared/Authentication/routes';
import PROFILE_ROUTES from 'modules/Trainees/Profile/routes';
import DASHBOARD_ROUTES from 'modules/Management/Dashboard/routes';
import {
	HOME_PAGE_ROUTES_PRIVATE,
	HOME_PAGE_ROUTES_PUBLIC,
} from 'modules/Shared/HomePage/routes';
import SESSION_MANAGEMENT_ROUTES from 'modules/Management/SessionsManagement/routes';
import CANDIDATES_MANAGEMENT_ROUTES from 'modules/Management/CandidatesManagement/routes';
import ROLE_MANAGEMENT_ROUTES from 'modules/Management/RoleManagement/routes';

const GLOBAL_ROUTES: { PUBLIC: IRoute[]; PRIVATE: IRoute[] } = {
	PUBLIC: [...AUTH_ROUTES, ...HOME_PAGE_ROUTES_PUBLIC],
	PRIVATE: [
		...PROFILE_ROUTES,
		...DASHBOARD_ROUTES,
		...HOME_PAGE_ROUTES_PRIVATE,
		...SESSION_MANAGEMENT_ROUTES,
		...CANDIDATES_MANAGEMENT_ROUTES,
		...ROLE_MANAGEMENT_ROUTES,
	],
};

export default GLOBAL_ROUTES;
