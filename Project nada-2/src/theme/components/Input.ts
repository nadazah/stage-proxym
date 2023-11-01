import type { StyleConfig } from '@chakra-ui/react';
import { hexToRGB } from 'theme/colors';

export const inputStyles: Record<string, Record<string, StyleConfig>> = {
	components: {
		Input: {
			baseStyle: {
				field: {
					fontWeight: 400,
					width: '100%',
				},
			},

			variants: {
				outline: {
					field: {
						border: 'none',
						bg: hexToRGB('tertiary', 0.1),
						_focus: {
							borderWidth: '1px',
							borderStyle: 'solid',
							borderColor: 'primary.500',
							boxShadow: 'none',
						},
					},
				},
			},
			defaultProps: {
				variant: 'outline',
			},
		},
	},
};
