import React, { ButtonHTMLAttributes } from 'react';

import { ButtonComponent } from './styles';

type IButton = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IButton> = ({ children, ...rest }) => (
	<ButtonComponent type='button' {...rest}>
		{children}
	</ButtonComponent>
);

export default Button;
