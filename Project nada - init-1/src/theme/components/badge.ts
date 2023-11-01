import type { StyleConfig } from '@chakra-ui/react';
import { getColor, hexToRGB } from 'theme/colors';
import { borderRadius } from 'utils/constant';

export const badgeStyles: Record<string, Record<string, StyleConfig>> = {
	components: {
		Badge: {
			variants: {
				beauty: {
					textTransform: 'capitalize',
					color: 'primary.500',
					bg: hexToRGB('primary', 0.1),
					py: 3,
					px: 3,
					width: 'fit-content',
					borderRadius,
					_focus: {
						boxShadow: `0 0 0 1px ${getColor('primary', 600)}`,
					},
					_hover: {
						boxShadow: `0 0 0 1px ${getColor('primary', 600)}`,
					},
				},
			},
			defaultProps: {
				variant: 'beauty',
				colorScheme: 'primary',
			},
		},
	},
};
