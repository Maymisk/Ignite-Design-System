import { ComponentProps } from 'react';
import { X } from 'phosphor-react';
import { Provider } from '@radix-ui/react-toast';
import {
	ToastCloseButton,
	ToastContainer,
	ToastDescription,
	ToastTitle,
	ToastViewport,
} from './styles';

export interface IToastProps extends ComponentProps<typeof ToastContainer> {
	title: string;
	description: string;
}

export function Toast({ title, description, ...rest }: IToastProps) {
	return (
		<Provider>
			<ToastContainer {...rest}>
				<ToastTitle>{title}</ToastTitle>

				<ToastDescription>{description}</ToastDescription>

				<ToastCloseButton>
					<X size={20} weight="bold" />
				</ToastCloseButton>
			</ToastContainer>

			<ToastViewport />
		</Provider>
	);
}

Toast.displayName = 'Toast';
