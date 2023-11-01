// import {
//   //   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { combinedReducer } from './reducer';

// const storage = require('redux-persist/lib/storage').default;
//** Redux Persist -- Uncomment to use **//
// const persistConfig = {
//   key: 'root',
//   version: 1,
//   whitelist: ['counter'],
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, combinedReducer); // Create a new reducer with our existing reducer
// {
//   serializableCheck: {
//     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//   },
// }
const store = configureStore({
	reducer: combinedReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
});

export type AppState = ReturnType<typeof store.getState>;
export default store;
