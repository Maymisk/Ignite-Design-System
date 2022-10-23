import { Box, Checkbox, ICheckboxProps, Text } from '@ignite-ui/react';
import { Meta, StoryObj } from '@storybook/react';

function CheckboxDecorator(Story: any) {
	return (
		<Box as={'label'} css={{ display: 'flex', gap: '$2' }}>
			{Story()}
			<Text size={'sm'}>Accept terms of use</Text>
		</Box>
	);
}

export default {
	title: 'Form/Checkbox',
	component: Checkbox,

	args: {
		children: 'Checkbox',
	},

	decorators: [CheckboxDecorator],
} as Meta<ICheckboxProps>;

export const Primary: StoryObj<ICheckboxProps> = {};
