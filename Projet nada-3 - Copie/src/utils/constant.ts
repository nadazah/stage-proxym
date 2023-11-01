import { getColor } from 'theme/colors';

export const borderRadius = 8;
export const boxShadow = '0px 6px 20px rgba(0, 55, 135, 0.08)';

export const scrollbarStyle = {
	'::-webkit-scrollbar': {
		width: '5px',
		height: '5px',
	},
	'::-webkit-scrollbar-thumb': {
		background: getColor('primary'),
		backgroundClip: 'padding-box',
		borderRadius: '9999px',
	},
};
