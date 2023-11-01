import type { IPermission } from './permission';

export interface IRole {
	id: string;
	name: string;
	permissions: IPermission[];
}
