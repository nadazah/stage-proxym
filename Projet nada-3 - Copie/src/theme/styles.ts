import colors from './colors';
import { baseFontSize } from './foundations/fontSize';

export const globalStyles = {
	colors,
	styles: {
		global: (): Record<string, any> => ({
			html: {
				fontSize: baseFontSize,
				webkitUserSelect: 'none',
				msUserSelect: 'none',
				userSelect: 'none',
				bg: 'gray.50',
				height: '100%',
				width: '100%',
			},
			body: {
				overflow: 'hidden',
				bg: 'white',
			},
		}),
	},
};
