import React, { ComponentPropsWithoutRef } from 'react';

import { Container } from './styles';

interface ITooltip extends ComponentPropsWithoutRef<'div'> {
	title: string;
	className?: string;
	type: 'warn' | 'success' | 'error' | undefined;
}

const Tooltip: React.FC<ITooltip> = ({ title, type, className, children }) => (
	<Container type={type} className={className}>
		{children}
		<span>{title}</span>
	</Container>
);

export default Tooltip;
