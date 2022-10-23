import { Avatar, IAvatarProps } from '@ignite-ui/react';
import { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Data display/Avatar',
	component: Avatar,

	args: {
		src: 'https://github.com/maymisk.png',
		alt: "Khalil's profile picture",
	},
} as Meta<IAvatarProps>;

export const Primary: StoryObj<IAvatarProps> = {};

export const WithFallback: StoryObj<IAvatarProps> = {
	args: {
		src: undefined,
		alt: '',
	},
};