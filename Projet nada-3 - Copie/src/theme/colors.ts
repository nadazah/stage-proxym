// ! IMPORTANT: default color must be 500.
// ! IMPORTANT: 600 is hover color

import { theme } from '@chakra-ui/react';

export const customizedColors: Record<string, Record<number, string>> = {
	primary: {
		50: '#ab95eb',
		100: '#9a7fe7',
		200: '#896ae3',
		300: '#7955df',
		400: '#683fdb',
		500: '#572AD7',
		600: '#4e26c2',
		700: '#4622ac',
		800: '#3d1d97',
		900: '#341981',
	},
	secondary: {
		50: '#ffe68e',
		100: '#ffe177',
		200: '#ffdc60',
		300: '#ffd749',
		400: '#ffd233',
		500: '#FFCD1C',
		600: '#e6b919',
		700: '#cca416',
		800: '#b39014',
		900: '#997b11',
	},
	tertiary: {
		50: '#f8c48c',
		100: '#f7b874',
		200: '#f5ac5d',
		300: '#f4a146',
		400: '#f2952f',
		500: '#f18918',
		600: '#d97b16',
		700: '#c16e13',
		800: '#a96011',
		900: '#91520e',
	},
	quaternary: {
		50: '#f390ba',
		100: '#f07aac',
		200: '#ee649e',
		300: '#eb4d91',
		400: '#e93783',
		500: '#e62175',
		600: '#cf1e69',
		700: '#b81a5e',
		800: '#a11752',
		900: '#8a1446',
	},
	quinary: {
		50: '#a1d4ef',
		100: '#8ecbec',
		200: '#7bc3e9',
		300: '#68bae5',
		400: '#55b2e2',
		500: '#42a9df',
		600: '#3b98c9',
		700: '#3587b2',
		800: '#2e769c',
		900: '#286586',
	},
	senary: {
		50: '#b6dbab',
		100: '#a7d49a',
		200: '#98cd89',
		300: '#89c579',
		400: '#7bbe68',
		500: '#6cb757',
		600: '#61a54e',
		700: '#569246',
		800: '#4c803d',
		900: '#416e34',
	},
	gray: {
		5: '#F3F3F3',
		10: '#f7f7f7',
		50: '#d3d4d6',
		100: '#cacbcd',
		200: '#c1c3c5',
		300: '#b9babd',
		400: '#b0b2b4',
		500: '#a7a9ac',
		600: '#96989b',
		700: '#86878a',
		800: '#757678',
		900: '#646567',
	},
};

const colors: Record<string, Record<number, string>> = {
	...theme.colors,
	...customizedColors,
};

export const hexToRGB = (
	color: string,
	alpha?: number,
	op?: number,
): string => {
	const hex = getColor(color, op);
	const r = parseInt(hex.slice(1, 3), 16);
	const g = parseInt(hex.slice(3, 5), 16);
	const b = parseInt(hex.slice(5, 7), 16);
	const a = alpha ? `, ${alpha}` : '';

	return `rgba(${r},${g},${b}${a})`;
};

export const getColor = (color = 'primary', opacity = 500): string =>
	colors[color][opacity];

export default colors;
