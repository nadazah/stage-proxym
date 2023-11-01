import { homePageSliceReducer } from './home_page.slice';

const combinedReducer = {
	...homePageSliceReducer,
};

export * from './home_page.slice';
export default combinedReducer;
