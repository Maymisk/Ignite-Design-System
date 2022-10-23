import { ComponentProps } from 'react';
import { Input, TextInputContainer, TextInputPrefix } from './styles';

export interface ITextInputProps extends ComponentProps<typeof Input> {
	prefix?: string;
}

export function TextInput({ prefix, ...rest }: ITextInputProps) {
	return (
		<TextInputContainer>
			{!!prefix && <TextInputPrefix>{prefix}</TextInputPrefix>}

			<Input {...rest} />
		</TextInputContainer>
	);
}
