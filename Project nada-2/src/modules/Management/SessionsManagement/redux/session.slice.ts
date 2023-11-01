import { createSlice, current } from '@reduxjs/toolkit';
import type { IReduxSession } from '../interface/session';
import { sessionsMock } from 'mocks';

const reducerName = 'session';
export const initialState: IReduxSession.IInitialState = {
	data: sessionsMock,
	status: 'idle',
	error: null,
};

// const deleteRowOnServer = rowId => {
// 	return new Promise(resolve => {
// 		setTimeout(() => {
// 			resolve(rowId);
// 		}, 1000);
// 	});
// };

// export const deleteRow = createAsyncThunk('data/deleteRow', async rowId => {
// 	const response = await deleteRowOnServer(rowId);
// 	return response;
// });

// export const saveFormData = createAsyncThunk(
// 	'form/saveFormData',
// 	async formData => {
// 		return new Promise<any>(resolve => {
// 			setTimeout(() => {
// 				resolve(formData);
// 			}, 1000);
// 		});
// 	},
// );

// const updateRowOnServer = (rowId, updatedData) => {
// 	return new Promise(resolve => {
// 		setTimeout(() => {
// 			resolve({ id: rowId, ...updatedData });
// 		}, 1000);
// 	});
// };

// interface UpdateRowPayload {
// 	rowId: string;
// 	updatedData: any;
// }

// export const updateRow = createAsyncThunk(
// 	'data/updateRow',
// 	async ({ rowId, updatedData }: UpdateRowPayload) => {
// 		const response = await updateRowOnServer(rowId, updatedData);
// 		return response;
// 	},
// );

export const sessionSlice = createSlice({
	name: reducerName,
	initialState,
	reducers: {
		deleteRow(state, action) {
			state.data = state.data.filter(row => row.id !== action.payload);
		},

		saveFormData(state, action) {
			state.status = 'succeeded';
			state.data.push(action.payload);
		},

		updateRow(state, action) {
			state.status = 'succeeded';
			console.log({ state: current(state) });

			const updatedData = action.payload as IReduxSession.ISession[]; // Cast action.payload to ISession[]

			// Update the specific row in the state with the updated data
			state.data = state.data.map(row => {
				const updatedRow =
					row.id === action.payload.rowId ? updatedData[0] : row;
				return updatedRow;
			});
		},
	},
	// extraReducers: builder => {
	// 	builder
	// 		// .addCase(saveFormData.pending, state => {
	// 		// 	state.status = 'loading';
	// 		// })
	// 		// .addCase(saveFormData.fulfilled, (state, action) => {
	// 		// 	state.status = 'succeeded';
	// 		// 	state.data.push(action.payload);
	// 		// })
	// 		// .addCase(saveFormData.rejected, (state, action) => {
	// 		// 	state.status = 'failed';
	// 		// 	state.error = action.error.message;
	// 		// })

	// 		// .addCase(deleteRow.pending, state => {
	// 		// 	state.status = 'loading';
	// 		// })
	// 		// .addCase(deleteRow.fulfilled, (state, action) => {
	// 		// 	state.status = 'succeeded';
	// 		// 	// Filtrer les lignes pour supprimer celle qui correspond à l'id supprimé
	// 		// 	state.data = state.data.filter(row => row.id !== action.payload);
	// 		// })
	// 		// .addCase(deleteRow.rejected, (state, action) => {
	// 		// 	state.status = 'failed';
	// 		// 	state.error = action.error.message;
	// 		// })

	// },
});

export const sessionSliceReducer = { [reducerName]: sessionSlice.reducer };
export const { deleteRow, updateRow, saveFormData } = sessionSlice.actions;
