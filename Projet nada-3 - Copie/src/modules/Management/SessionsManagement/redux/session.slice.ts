import { createSlice } from '@reduxjs/toolkit';
import type { IReduxSession } from '../interface/session';

const reducerName = 'session';
export const initialState: IReduxSession.IInitialState = {
	data: [],
	status: 'idle',
	error: null,
};


export const sessionSlice = createSlice({
	name: reducerName,
	initialState,
	reducers: {
		sessionsFetched: (state, action) => {
			state.data = action.payload;
		},

		deleteRow(state, action) {

			state.data = state.data.filter(row => row.id !== action.payload);
			console.log(state.data)
			console.log(action)
		},

		saveFormData(state, action) {
			state.status = 'succeeded';
			state.data.push(action.payload);
		},

		updateRow(state, action) {
			state.status = 'succeeded';
		  
			// Update the specific row in the state with the updated data
			state.data = state.data.map(row => {
			  const updatedRow =
				row.id === action.payload.rowId ? action.payload.formDataa[0] : row;
			  return updatedRow;
			});
		  },
	},
	
});

export const sessionSliceReducer = { [reducerName]: sessionSlice.reducer };
export const { deleteRow, updateRow, saveFormData, sessionsFetched } = sessionSlice.actions;
