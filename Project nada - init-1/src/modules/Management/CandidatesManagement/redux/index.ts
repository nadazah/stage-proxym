import { userSliceReducer } from './candidates.slice';

const combinedReducer = {
	...userSliceReducer,
};

export * from './candidates.slice';
export default combinedReducer;
