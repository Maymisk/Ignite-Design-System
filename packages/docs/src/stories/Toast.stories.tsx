import { Meta, StoryObj } from '@storybook/react';
import { Toast, IToastProps } from '@ignite-ui/react';

export default {
	title: 'Surfaces/Toast',
	component: Toast,

	args: {
		title: 'Agendamento realizado',
		description: 'Quarta-feira, 23 de Outubro às 16h',

		duration: 20 * 60000, // 20 minutes
	},
} as Meta<IToastProps>;

export const Primary: StoryObj<IToastProps> = {};

export const SmallDuration: StoryObj<IToastProps> = {
	args: {
		duration: 5000,
	},
};
