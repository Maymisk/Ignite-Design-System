import { TextInput, ITextInputProps, Box, Text } from '@ignite-ui/react';
import { Meta, StoryObj } from '@storybook/react';

function TextInputDecorator(Story: any) {
	return (
		<Box
			as={'label'}
			css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
		>
			<Text size={'sm'}>Email address</Text>

			{Story()}
		</Box>
	);
}

export default {
	title: 'Form/Text Input',
	component: TextInput,

	decorators: [TextInputDecorator],
} as Meta<ITextInputProps>;

export const Primary: StoryObj<ITextInputProps> = {
	args: {
		placeholder: 'Type your name...',
	},
};

export const Disabled: StoryObj<ITextInputProps> = {
	args: {
		disabled: true,
	},
};

export const WithPrefix: StoryObj<ITextInputProps> = {
	args: {
		prefix: 'cal.com/',
	},
};
