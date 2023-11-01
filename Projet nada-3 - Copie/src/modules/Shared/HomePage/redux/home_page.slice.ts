import { createSlice } from '@reduxjs/toolkit';

import type { IReduxHome } from '../interface/homePage';

const reducerName = 'auth';
export const initialState: IReduxHome.IInitialState = {
	data: [],
};

export const homePageSlice = createSlice({
	name: reducerName,
	initialState,
	reducers: {},
});

export const homePageSliceReducer = { [reducerName]: homePageSlice.reducer };
