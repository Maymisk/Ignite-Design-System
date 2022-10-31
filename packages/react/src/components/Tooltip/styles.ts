import { keyframes, styled } from '../../styles';
import { Content, Arrow, Trigger } from '@radix-ui/react-tooltip';

const slideUpAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateY(2px)' },
	'100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateX(-2px)' },
	'100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateY(-2px)' },
	'100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateX(2px)' },
	'100%': { opacity: 1, transform: 'translateX(0)' },
});

export const TooltipContainer = styled(Content, {
	background: '$gray900',

	borderRadius: '$sm',

	padding: '$3 $4',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '$2',

	color: '$gray100',

	fontWeight: '$medium',
	fontSize: '$sm',
	fontFamily: '$default',

	lineHeight: '$short',

	textAlign: 'center',

	animationDuration: '400ms',

	animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',

	willChange: 'transform, opacity',

	'&[data-state="delayed-open"]': {
		'&[data-side="top"]': { animationName: slideDownAndFade },
		'&[data-side="right"]': { animationName: slideLeftAndFade },
		'&[data-side="bottom"]': { animationName: slideUpAndFade },
		'&[data-side="left"]': { animationName: slideRightAndFade },
	},
});

export const TooltipTrigger = styled(Trigger, {
	background: 'transparent',

	border: 0,
});

export const TooltipArrow = styled(Arrow, {
	fill: '$gray900',
});
