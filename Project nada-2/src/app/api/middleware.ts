import type { Middleware } from '@reduxjs/toolkit';
import { isRejectedWithValue } from '@reduxjs/toolkit';
import CreateOutsideToast from 'components/Toast/Toast';
import { ToastStatus } from 'types/models/toast';

export const unauthenticatedMiddleware: Middleware = () => next => action => {
	// if (isRejectedWithValue(action) && action.payload.status === 401) {
	if (isRejectedWithValue(action)) {
		CreateOutsideToast({
			description: action?.payload?.data?.msg,
			title: 'Error Occurred',
			status: ToastStatus.ERROR,
		});
	}

	return next(action);
};
