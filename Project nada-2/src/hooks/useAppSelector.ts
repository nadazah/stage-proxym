import type store from 'app/store';
import type { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';

export type AppState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
