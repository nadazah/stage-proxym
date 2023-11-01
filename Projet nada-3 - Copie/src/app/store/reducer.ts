import { combineReducers } from '@reduxjs/toolkit';
// import { unauthenticatedMiddleware } from 'app/api/middleware';
import { Management, Shared } from 'modules';

export const combinedReducer = combineReducers({
	...Management.Dashboard.default,
	...Management.SessionsManagement.default,
	// ...Management.CandidatesManagement.default,
	// ...Management.RoleManagemenrt.default,
	// ...Trainees.Profile.default,
	...Shared.Auth.default,
});

// export const combinedMiddlewares = [
// 	unauthenticatedMiddleware,
// ];
