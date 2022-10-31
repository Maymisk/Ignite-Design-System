import { TooltipArrow, TooltipContainer, TooltipTrigger } from './styles';
import { ReactNode, ComponentType } from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';

export interface ITooltipProps {
	triggerElement: ReactNode;
	tooltipContent: ReactNode;

	rootProps?: RadixTooltip.TooltipProps;
	portalProps?: RadixTooltip.PortalProps;
	contentProps?: RadixTooltip.TooltipContentProps;
}

export function Tooltip({
	triggerElement,
	tooltipContent,
	rootProps,
	portalProps,
	contentProps,
}: ITooltipProps) {
	return (
		<RadixTooltip.Provider>
			<RadixTooltip.Root {...rootProps}>
				<TooltipTrigger>{triggerElement}</TooltipTrigger>

				<RadixTooltip.Portal {...portalProps}>
					<TooltipContainer {...contentProps}>
						{tooltipContent}

						<TooltipArrow />
					</TooltipContainer>
				</RadixTooltip.Portal>
			</RadixTooltip.Root>
		</RadixTooltip.Provider>
	);
}
