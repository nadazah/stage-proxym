import { Button } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import { getColor } from 'theme/colors';
export default {
	component: Button,
	title: 'Components/Button',
	argTypes: {
		size: { options: ['lg', 'md', 'sm'], control: { type: 'select' } },
		bg: {
			options: {
				Primary: getColor('primary'),
				Secondary: getColor('secondary'),
				Tertiary: getColor('tertiary'),
				Quaternary: getColor('quaternary'),
			},
			control: { type: 'select' },
		},
	},
} as Meta;

const Template = (props: any): JSX.Element => (
	<Button {...props}>Button</Button>
);

export const Solid: any = Template.bind({});
Solid.args = {
	size: 'md',
	bg: getColor('primary'),
};

export const Link: any = Template.bind({});

Link.args = {
	size: 'md',
	variant: 'link',
	bg: getColor('primary'),
};

export const LoadingButton: any = Template.bind({});

LoadingButton.args = {
	size: 'md',
	colorScheme: 'gray',
	isLoading: true,
};
