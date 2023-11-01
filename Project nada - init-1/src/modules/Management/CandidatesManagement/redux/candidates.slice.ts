import { createSlice } from '@reduxjs/toolkit';
import type { IReduxCandidate } from '../interface/candidate';

const reducerName = 'candidates';
export const initialState: IReduxCandidate.IInitialState = {
	data: [],
};

export const candidateSlice = createSlice({
	name: reducerName,
	initialState,
	reducers: {},
});

export const userSliceReducer = { [reducerName]: candidateSlice.reducer };
