import { ComponentProps } from 'react';
import { styled } from '../styles';

export const TextArea = styled('textarea', {
	boxSizing: 'border-box',

	background: '$gray900',

	padding: '$3 $4',

	borderRadius: '$sm',

	border: '2px solid $gray900',

	fontFamily: '$default',
	fontSize: '$sm',
	fontWeight: '$regular',

	resize: 'vertical',

	color: '$white',

	display: 'flex',
	alignItems: 'baseline',

	'&:focus': {
		outline: 0,
		borderColor: '$ignite300',
	},

	'&:disabled': {
		opacity: 0.5,

		cursor: 'not-allowed',
	},

	'&:placeholder': {
		color: '$gray400',
	},
});

export interface ITextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea';
