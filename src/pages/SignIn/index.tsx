import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useAuth } from '../../hooks/AuthContext';

import logo from '../../assets/logo.svg';

import { Button, Input } from '../../components';

import { Container, SignInForm, BackgroundImage } from './styles';
import getValidationsErrors from '../../utils/getValidationErrors';

interface SignInFormData {
	email: string;
	password: string;
}

const SignIn: React.FC = () => {
	const { signIn } = useAuth();
	const formRef = useRef<FormHandles>(null);

	const handleSubmit = useCallback(
		async (data: SignInFormData) => {
			try {
				formRef.current?.setErrors({});
				const schema = Yup.object().shape({
					email: Yup.string()
						.required('E-mail obrigatório')
						.email('Digite um e-mail válido'),
					password: Yup.string().required('Senha obrigatória'),
				});
				await schema.validate(data, {
					abortEarly: false,
				});

				signIn({ email: data.email, password: data.password });
			} catch (err) {
				const errors = getValidationsErrors(err);
				formRef.current?.setErrors(errors);
			}
		},
		[signIn],
	);

	return (
		<Container>
			<SignInForm>
				<img src={logo} alt='GoBarber' />

				<Form onSubmit={handleSubmit} ref={formRef}>
					<h1>Faça seu login</h1>
					<Input type='email' icon={FiMail} placeholder='E-mail' name='email' />
					<Input type='password' icon={FiLock} placeholder='Senha' name='password' />

					<Button type='submit'>Entrar</Button>

					<a href='teste'>Esqueci minha senha</a>
				</Form>

				<a href='teste'>
					<FiLogIn />
					Criar conta
				</a>
			</SignInForm>
			<BackgroundImage />
		</Container>
	);
};

export default SignIn;
