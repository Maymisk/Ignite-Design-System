import { Box, IBoxProps, Text } from '@ignite-ui/react';
import { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Surfaces/Box',
	component: Box,

	args: {
		children: (
			<>
				<Text>Testando a box</Text>
			</>
		),
	},

	argTypes: {
		children: {
			control: {
				type: null,
			},
		},
	},
} as Meta<IBoxProps>;

export const Primary: StoryObj<IBoxProps> = {};
