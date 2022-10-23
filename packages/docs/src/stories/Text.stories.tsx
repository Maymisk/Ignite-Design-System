import { Text, ITextProps } from '@ignite-ui/react';
import { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Typography/Text',
	component: Text,

	args: {
		children:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quibusdam accusantium doloremque assumenda vero minus',

		size: 'md',
	},

	argTypes: {
		size: {
			options: [
				'xxs',
				'xs',
				'sm',
				'md',
				'lg',
				'xl',
				'2xl',
				'4xl',
				'5xl',
				'6xl',
				'7xl',
				'8xl',
				'9xl',
			],

			control: {
				type: 'inline-radio',
			},
		},
	},
} as Meta<ITextProps>;

export const Primary: StoryObj<ITextProps> = {};

export const CustomTag: StoryObj<ITextProps> = {
	args: {
		children: 'Strong text',
		as: 'strong',
	},
};
