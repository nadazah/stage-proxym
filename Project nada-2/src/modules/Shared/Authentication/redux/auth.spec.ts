import { initialState } from '.';

import type { IReduxUser } from 'types/models';

describe('Auth slice test', () => {
	it('Should return a correct initial state', () => {
		expect(initialState).toEqual({
			users: [],
		} as IReduxUser.IInitialState);
	});
});
