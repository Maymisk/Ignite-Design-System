import { keyframes, styled } from '../../styles';
import {
	Root,
	Title,
	Description,
	Close,
	Viewport,
} from '@radix-ui/react-toast';

const hide = keyframes({
	'0%': { opacity: 1 },
	'100%': { opacity: 0 },
});

const slideIn = keyframes({
	from: { transform: `translateX(100%)` },
	to: { transform: 'translateX(0)' },
});

const swipeOut = keyframes({
	from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
	to: { transform: `translateX(100%)` },
});

export const ToastContainer = styled(Root, {
	width: '100%',

	background: '$gray800',

	padding: '$3 $5',

	border: '1px solid $gray600',
	borderRadius: '$sm',

	position: 'relative',

	listStyle: 'none',

	'&[data-state="open"]': {
		animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
	},

	'&[data-state="closed"]': {
		animation: `${hide} 100ms ease-in`,
	},

	'&[data-swipe="move"]': {
		transform: 'translateX(var(--radix-toast-swipe-move-x))',
	},

	'&[data-swipe="cancel"]': {
		transform: 'translateX(0)',
		transition: 'transform 200ms ease-out',
	},

	'&[data-swipe="end"]': {
		animation: `${swipeOut} 100ms ease-out`,
	},
});

export const ToastTitle = styled(Title, {
	color: '$white',

	fontWeight: '$bold',
	fontSize: '$xl',
	fontFamily: '$default',

	lineHeight: '$base',
});

export const ToastDescription = styled(Description, {
	marginTop: '$1',

	color: '$gray200',

	fontFamily: '$default',
	fontWeight: '$regular',
	fontSize: '$sm',

	lineHeight: '$base',
});

export const ToastCloseButton = styled(Close, {
	position: 'absolute',
	top: 16,
	right: 16,

	background: 'transparent',

	border: 0,

	svg: {
		color: '$gray200',
	},
});

export const ToastViewport = styled(Viewport, {
	width: '100%',
	maxWidth: 360,

	position: 'absolute',
	bottom: 32,
	right: 32,
});
