export interface IUser {
	id: number;
	accountId: string;
	name: string;
	username?: string;
	password?: string;
	role: string;
	email?: string;
	mobileNumber?: string;
	landlineNumber?: string;
	isActive: boolean;
}
