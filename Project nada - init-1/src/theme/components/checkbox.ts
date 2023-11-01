import type { StyleConfig } from '@chakra-ui/react';

export const checkboxStyles: Record<string, Record<string, StyleConfig>> = {
	components: {
		Checkbox: {
			baseStyle: {
				control: {
					borderColor: 'primary.500',
					padding: 3, // change the padding of the control
					borderRadius: 2, // change the border radius of the control
					_checked: {
						bg: 'primary.500',
					},
				},
			},
			defaultProps: {
				colorScheme: 'transparent',
			},
		},
	},
};
