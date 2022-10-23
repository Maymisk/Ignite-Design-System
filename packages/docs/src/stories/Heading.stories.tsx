import { Heading, IHeadingProps } from '@ignite-ui/react';
import { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Typography/Heading',
	component: Heading,

	args: {
		children: 'Heading',

		size: 'md',
	},

	argTypes: {
		size: {
			options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],

			control: {
				type: 'inline-radio',
			},
		},
	},
} as Meta<IHeadingProps>;

export const Primary: StoryObj<IHeadingProps> = {};

export const CustomTag: StoryObj<IHeadingProps> = {
	args: {
		as: 'h1',
		children: 'H1 Heading',
	},
	parameters: {
		docs: {
			description: {
				story: "By default, the heading's HTML tag is going to be `h2`. CustomTag allows you to change the default to another heading tag by passing the `as` argument.",
			},
		},
	},
};
