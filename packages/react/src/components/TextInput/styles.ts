import { styled } from '../../styles';

export const TextInputContainer = styled('div', {
	boxSizing: 'border-box',

	background: '$gray900',

	padding: '$3 $4',

	borderRadius: '$sm',

	border: '2px solid $gray900',

	display: 'flex',
	alignItems: 'baseline',

	'&:has(input:focus)': {
		borderColor: '$ignite300',
	},

	'&:has(input:disabled)': {
		opacity: 0.5,

		cursor: 'not-allowed',
	},
});

export const Input = styled('input', {
	width: '100%',

	fontFamily: '$default',
	fontSize: '$sm',
	fontWeight: '$regular',

	border: 0,

	background: 'transparent',

	color: '$white',

	'&:focus': {
		outline: 0,
	},

	'&:disabled': {
		cursor: 'not-allowed',
	},

	'&:placeholder': {
		color: '$gray400',
	},
});

export const TextInputPrefix = styled('span', {
	fontFamily: '$default',
	fontSize: '$sm',
	fontWeight: '$regular',

	color: '$gray400',
});
