import { createSlice } from '@reduxjs/toolkit';
import type { IReduxDashboard } from '../interface/user';

const reducerName = 'dashboard';
export const initialState: IReduxDashboard.IInitialState = {
	data: [],
};

export const dashboardSlice = createSlice({
	name: reducerName,
	initialState,
	reducers: {},
});

export const dashboardSliceReducer = { [reducerName]: dashboardSlice.reducer };
