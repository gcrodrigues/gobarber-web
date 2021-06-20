import React, {
	InputHTMLAttributes,
	useEffect,
	useRef,
	useState,
	useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<IInput> = ({ name, icon: Icon, ...rest }) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isFocused, setIsFocused] = useState(false);
	const [isFilled, setIsFilled] = useState(false);
	const { fieldName, defaultValue, error, registerField } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: 'value',
		});
	}, [fieldName, registerField]);

	const handleInputBlur = useCallback(() => {
		setIsFocused(false);
		setIsFilled(!!inputRef.current?.value);
	}, []);

	const handleInputFocus = useCallback(() => {
		setIsFocused(true);
	}, []);

	return (
		<Container hasError={!!error} isFocused={isFocused} isFilled={isFilled}>
			{Icon && <Icon />}
			<input
				defaultValue={defaultValue}
				type='text'
				ref={inputRef}
				onFocus={handleInputFocus}
				onBlur={handleInputBlur}
				{...rest}
			/>

			{error && (
				<Error type='error' title={error}>
					<FiAlertCircle size={20} color='#c53030' />
				</Error>
			)}
		</Container>
	);
};

export default Input;
