import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationsErrors from '../../utils/getValidationErrors';

import logo from '../../assets/logo.svg';

import { Button, Input } from '../../components';

import { Container, SignUpForm, BackgroundImage } from './styles';

const SignIn: React.FC = () => {
	const formRef = useRef<FormHandles>(null);

	const handleSubmit = useCallback(async (data: object) => {
		try {
			formRef.current?.setErrors({});
			const schema = Yup.object().shape({
				name: Yup.string().required('Nome obrigatório'),
				email: Yup.string()
					.required('E-mail obrigatório')
					.email('Digite um e-mail válido'),
				password: Yup.string().min(6, 'No mínimo 6 dígitos'),
			});
			await schema.validate(data, {
				abortEarly: false,
			});
		} catch (err) {
			const errors = getValidationsErrors(err);
			formRef.current?.setErrors(errors);
		}
	}, []);

	return (
		<Container>
			<BackgroundImage />
			<SignUpForm>
				<img src={logo} alt='GoBarber' />

				<Form ref={formRef} onSubmit={handleSubmit}>
					<Input type='text' icon={FiUser} placeholder='Nome' name='name' />
					<Input type='email' icon={FiMail} placeholder='E-mail' name='email' />
					<Input type='password' icon={FiLock} placeholder='Senha' name='password' />

					<Button type='submit'>Cadastrar</Button>
				</Form>

				<a href='teste'>
					<FiArrowLeft />
					Fazer login
				</a>
			</SignUpForm>
		</Container>
	);
};

export default SignIn;
