import { ComponentProps } from 'react';
import { Label, MultiStepContainer, Step, Steps } from './styles';

export interface IMultiStepProps {
	size: number;
	currentStep?: number;
}

export function MultiStep({ size, currentStep = 1 }: IMultiStepProps) {
	const array = Array.from({ length: size }, (_, i) => i + 1);

	return (
		<MultiStepContainer>
			<Label>
				Passo {currentStep} de {size}
			</Label>

			<Steps css={{ '--steps-size': size }}>
				{array.map(step => {
					return <Step key={step} active={currentStep >= step} />;
				})}
			</Steps>
		</MultiStepContainer>
	);
}

MultiStep.displayName = 'MultiStep';
