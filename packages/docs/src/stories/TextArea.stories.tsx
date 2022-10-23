import { TextArea, ITextAreaProps, Box, Text } from '@ignite-ui/react';
import { Meta, StoryObj } from '@storybook/react';

function TextAreaDecorator(Story: any) {
	return (
		<Box
			as={'label'}
			css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
		>
			<Text size={'sm'}>Observations</Text>

			{Story()}
		</Box>
	);
}

export default {
	title: 'Form/Text Area',
	component: TextArea,

	decorators: [TextAreaDecorator],
} as Meta<ITextAreaProps>;

export const Primary: StoryObj<ITextAreaProps> = {
	args: {
		placeholder: 'Add observations...',
	},
};

export const Disabled: StoryObj<ITextAreaProps> = {
	args: {
		disabled: true,
	},
};
