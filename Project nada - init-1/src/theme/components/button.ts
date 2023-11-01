import type { StyleConfig } from '@chakra-ui/react';
import { hexToRGB } from 'theme/colors';
import { borderRadius } from 'utils/constant';

export const buttonStyles: Record<string, Record<string, StyleConfig>> = {
	components: {
		Button: {
			baseStyle: {
				fontWeight: 'bold',
				color: 'white',
				width: '97px',
				borderRadius: borderRadius,
			},
			sizes: {
				xl: {
					h: '56px',
					fontSize: 'lg',
					px: '32px',
				},
				md: {
					h: '40px',
				},
				sm: {
					h: '40px',
					w: '100px',
					fontSize: 'sm',
				},
				xs: {
					h: '40px',
					w: '50px',
					fontSize: 'sm',
				},
			},
			variants: {
				iconButton: {
					bg: 'primary.500',
					'> svg': {
						fontSize: '2xl',
					},
					w: '40px',
					_hover: {
						opacity: 0.6,
					},
				},
				iconButtonTransparent: {
					bg: 'transparent',
					_hover: {
						bg: hexToRGB('primary', 0.2),
					},
					width: '39px',
				},
				'with-shadow': {
					bg: 'primary.100',
					boxShadow: '0 0 2px 2px #efdfde',
				},
				sm: {
					bg: 'primary.500',
					fontSize: 'sm',
					width: '150px',
					_hover: {
						opacity: 0.8,
						color: 'white',
					},
				},
				outline: {
					bg: 'transparent',
					fontSize: 'sm',
					width: '150px',
					_hover: {
						opacity: 0.8,
						color: 'white',
					},
				},
			},
			defaultProps: {
				variant: 'sm',
				colorScheme: 'primary',
			},
		},
	},
};
