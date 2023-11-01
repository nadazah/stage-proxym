import { sessionSliceReducer } from './session.slice';

const combinedReducer = {
	...sessionSliceReducer,
};

export * from './session.slice';
export default combinedReducer;
