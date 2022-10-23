import { styled, keyframes } from '../../styles';
import { Root, CheckboxIndicator as Indicator } from '@radix-ui/react-checkbox';

export const CheckboxContainer = styled(Root, {
	all: 'unset',

	width: '$6',
	height: '$6',

	background: '$gray900',

	borderRadius: '$xs',

	lineHeight: 0,

	cursor: 'pointer',
	overflow: 'hidden',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	boxSizing: 'border-box',

	border: '2px solid $gray900',

	'&:focus': {
		border: '2px solid $ignite300',
	},

	'&[data-state="checked"]': {
		background: '$ignite300',
	},
});

const fadeIn = keyframes({
	from: {
		transform: 'scale(0)',
	},

	to: {
		transform: 'scale(100%)',
	},
});

const fadeOut = keyframes({
	from: {
		transform: 'scale(100%)',
	},

	to: {
		transform: 'scale(0)',
	},
});

export const CheckboxIndicator = styled(Indicator, {
	width: '$4',
	height: '$4',
	color: '$white',

	'&[data-state="checked"]': {
		animation: `${fadeIn} 200ms ease-out`,
	},

	'&[data-state="unchecked"]': {
		animation: `${fadeOut} 200ms ease-out`,
	},
});
