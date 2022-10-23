import { createStitches, defaultThemeMap } from '@stitches/react';
import * as tokens from '@ignite-ui/tokens';

export const {
	styled,
	theme,
	createTheme,
	css,
	getCssText,
	keyframes,
	globalCss,
	config,
} = createStitches({
	theme: {
		...tokens,
	},

	themeMap: {
		...defaultThemeMap,
		width: 'space',
		height: 'space',
	},
});
