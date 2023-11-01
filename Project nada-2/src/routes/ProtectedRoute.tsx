import React from 'react';
import type { IRoute } from 'types/models/route';
//! Uncomment when Authentication is implemented
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import type { AppState } from 'app/store';

interface Props {
	route: IRoute;
	path?: string;
	roles: string[];
}

const ProtectedRoute: React.FC<Props> = ({ route }) => {
	//! Uncomment when Authentication is implemented
	const _isAuthenticated = useSelector(
		(state: AppState) => state.auth.isAuthenticated,
	);

	if (_isAuthenticated) {
		return React.createElement(route.element, { name: route?.name });
	}
	return (
		<Navigate to='/public/login' state={{ name: route?.name?.toLowerCase() }} />
	);
};

export default ProtectedRoute;
