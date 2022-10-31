import { Meta, StoryObj } from '@storybook/react';
import { Tooltip, ITooltipProps, Box, Text, Button } from '@ignite-ui/react';

function TriggerElement() {
	return <Button>Hover over me 😁</Button>;
}

function TooltipDecorator(Story: any) {
	return (
		<Box
			css={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}
		>
			<Story />
		</Box>
	);
}

export default {
	title: 'Surfaces/Tooltip',
	component: Tooltip,

	args: {
		triggerElement: <TriggerElement />,
		tooltipContent: 'This is the best tooltip ever...',
	},

	argTypes: {
		triggerElement: {
			control: {
				type: null,
			},
		},
	},

	decorators: [TooltipDecorator],
} as Meta<ITooltipProps>;

export const Primary: StoryObj<ITooltipProps> = {};

export const RightPositioned: StoryObj<ITooltipProps> = {
	args: {
		contentProps: {
			side: 'right',
		},
	},

	argTypes: {
		contentProps: {
			control: {
				type: 'object',
			},
		},
	},
};
