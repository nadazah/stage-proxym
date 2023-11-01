import { createSlice } from '@reduxjs/toolkit';
import type { IReduxRole } from '../interface/role';

const reducerName = 'roles';
export const initialState: IReduxRole.IInitialState = {
	data: [],
};

export const roleSlice = createSlice({
	name: reducerName,
	initialState,
	reducers: {},
});

export const roleSliceReducer = { [reducerName]: roleSlice.reducer };
