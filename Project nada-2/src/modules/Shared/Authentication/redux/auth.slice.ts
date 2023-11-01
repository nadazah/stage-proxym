import type { IUser } from 'types/models/user';
import { createSlice } from '@reduxjs/toolkit';
import type { IReduxAuth } from '../interface/auth';

import { removeCookie, setCookie } from 'utils/functions';

const reducerName = 'auth';
export const initialState: IReduxAuth.IInitialState = {
	user: {} as IUser,
	isAuthenticated: false,
	isGuest: false,
};

export const authSlice = createSlice({
	name: reducerName,
	initialState,
	reducers: {
		logout: state => {
			state.user = initialState.user;
			state.isAuthenticated = false;
			state.isGuest = false;
			removeCookie('token');
		},
		login: (state, { payload }) => {
			state.isAuthenticated = true;
			state.isGuest = false;
			state.user = payload;
			setCookie('token', payload?.token);
		},
		continueAsGuest: state => {
			state.isAuthenticated = false;
			state.isGuest = true;
		},
	},
});

export const { logout, login, continueAsGuest } = authSlice.actions;
export const authSliceReducer = { [reducerName]: authSlice.reducer };
