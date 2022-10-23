import { Text, ITextProps } from '@ignite-ui/react';
import { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Typography/Text',
	component: Text,

	args: {
		children:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quibusdam accusantium doloremque assumenda vero minus',
	},
} as Meta<ITextProps>;

export const Primary: StoryObj<ITextProps> = {};

export const CustomTag: StoryObj<ITextProps> = {
	args: {
		children: 'Strong text',
		as: 'strong',
	},
};
