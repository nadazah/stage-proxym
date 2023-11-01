const routes = [
	{
		icon: 'home-outline',
		label: 'dashboard.name',
		path: '/private/admin/dashboard',
		access: 'private',
		roles: [],
	},
	{
		icon: 'profile',
		label: 'candidates.name',
		path: '/private/admin/candidates-management',
		access: 'private',
		roles: [],
	},
	{
		icon: 'session',
		label: 'session.name',
		path: '/private/admin/sessions-management',
		access: 'private',
		roles: [],
	},
	{
		icon: 'role',
		label: 'role.name',
		path: '/private/admin/role-management',
		access: 'private',
		roles: ['admin'],
	},
];

export default routes;
