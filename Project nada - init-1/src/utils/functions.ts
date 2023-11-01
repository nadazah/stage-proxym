import type { AlertStatus } from '@chakra-ui/react';
import CreateOutsideToast from 'components/Toast/Toast';
import Cookies from 'js-cookie';
import type { ICookies } from 'types/models/cookiesOptions';

//? REGEX
export const emailValidator = /^([\w+-.%]+@[\w.-]+\.[A-Za-z]+)*$/;
export const usernameValidator = /^[a-z0-9_-]{3,16}$/gim;
export const alphaNumericWithSpace = /^[a-zA-Z0-9 ]*$/gs;
export const alphaNumericWithoutSpace = /^[a-zA-Z0-9]*$/g;
export const floatValidator = /^\d{1,6}$|^(?=\d+[.]\d+$).{3,10}$/;
export const numberValidator = /^[0-9]{1,6}$/;
export const passwordValidator = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
export const alphaNumeric = /^[a-z0-9]+([-_\s]{1}[a-z0-9]+)*$/i;
export const noSpaceValidator = /^\S*$/gm;

export const checkObjEqual = (
	obj1: Record<string, any>,
	obj2: Record<string, any>,
): boolean => {
	if (obj1 && obj2) {
		for (const key in obj1) {
			if (key == 'undefined') {
				delete obj1.undefined;
			}
			if (obj1[key]?.toString() !== obj2[key]?.toString()) {
				return false;
			}
		}
		return true;
	}
	return false;
};

export const convertToBase64 = async (file: File): Promise<unknown> => {
	return new Promise((resolve, reject) => {
		if (file?.type) {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);
			fileReader.onload = (): void => {
				resolve(fileReader?.result);
			};
			fileReader.onerror = (error): void => {
				reject(error);
			};
		} else {
			reject('empty_file');
		}
	});
};

// *************** | Remove a certain keyword from object key | ***************

export const transformObject = (
	object: Record<string, any>,
	keyword: any,
): {
	[k: string]: any;
} => {
	const renamedObject = Object.fromEntries(
		Object.entries(object).map(([key, value]) => {
			const keyName =
				key.replace(keyword, '').charAt(0).toLowerCase() +
				key.replace(keyword, '').slice(1);
			return [keyName, value];
		}),
	);
	return renamedObject;
};

// ************************ | Get all object keys | ************************

export const getObjectKeys = (object: Record<string, string>): string[] => {
	const objKeys: Array<string> = [];
	Object.keys(object).forEach(key => {
		objKeys.push(key);
	});
	return objKeys;
};

export function isObjEmpty(obj: Record<string, any>): boolean {
	return Object.keys(obj).length === 0;
}

//? ***************** | ***************** | *****************

export const getFormattedDate = (dateTime: Date): string => {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const year = dateTime.getFullYear();
	const month = dateTime.getMonth();
	const day = dateTime.getDate();
	const monthName = months[month];
	return `${day}, ${dateTime.getDay()} ${monthName} ${year}`;
};

//? ***************** | Capitalize Words (UpperCase only first letter)| *****************
//? Supports multiple words

export function capitalizeWords(value: string): string {
	if (value && value !== undefined) {
		return value?.replace(/(?:^|\s)\S/g, function (letter: string) {
			return letter?.toUpperCase();
		});
	}
	return 'N/A';
}

//? ********************** | Toast Creation | ************************
export const displayToast = (msg: string, status: AlertStatus): void => {
	CreateOutsideToast({
		title: status?.charAt(0)?.toUpperCase() + status?.slice(1),
		description: msg,
		status: status,
	});
};

export function isMobileDevice(): boolean {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent,
	);
}

export function isiOSDevice(): boolean {
	return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

//? ********************** | Cookies functionalities | ************************

export function setCookie(name: string, value: any, options?: ICookies): void {
	Cookies.set(name, value, { ...options });
}

export function removeCookie(name: string): void {
	Cookies.remove(name);
}

export function getCookie(name: string): string | null {
	const value = Cookies.get(name);
	if (value) {
		return value;
	}
	return null;
}
