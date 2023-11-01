import { dashboardSliceReducer } from './dashboard.slice';

const combinedReducer = {
	...dashboardSliceReducer,
};

export * from './dashboard.slice';
export default combinedReducer;
