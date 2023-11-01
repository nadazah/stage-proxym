import { roleSliceReducer } from './role.slice';

const combinedReducer = {
	...roleSliceReducer,
};

export * from './role.slice';
export default combinedReducer;
