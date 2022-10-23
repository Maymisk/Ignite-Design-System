import { Box, IMultiStepProps, MultiStep } from '@ignite-ui/react';
import { Meta, StoryObj } from '@storybook/react';

function MultiStepDecorator(Story: any) {
	return (
		<Box
			as={'label'}
			css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
		>
			{Story()}
		</Box>
	);
}

export default {
	title: 'Form/Multi Step',
	component: MultiStep,

	args: {
		size: 4,
		currentStep: 3,
	},

	decorators: [MultiStepDecorator],
} as Meta<IMultiStepProps>;

export const Primary: StoryObj<IMultiStepProps> = {};

export const Full: StoryObj<IMultiStepProps> = {
	args: {
		currentStep: 4,
	},
};
