import styled from 'styled-components';
import { shade } from 'polished';

import SignInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
	height: 100%;

	display: flex;
	align-items: stretch;
`;

export const SignInForm = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-width: 700px;

	form {
		margin: 50px 0;
		width: 320px;
		text-align: center;

		h1 {
			margin-bottom: 24px;
		}

		> a {
			color: #f4ede8;
			display: block;
			margin-top: 24px;
			text-decoration: none;
			transition: color 0.2s;

			&:hover {
				color: ${shade(0.2, '#f4ede8')};
			}
		}
	}

	> a {
		color: #ff9000;
		display: flex;
		align-items: center;
		margin-top: 24px;
		text-decoration: none;
		transition: color 0.2s;

		svg {
			margin-right: 16px;
		}
		&:hover {
			color: ${shade(0.2, '#ff9000')};
		}
	}
`;

export const BackgroundImage = styled.div`
	flex: 1;
	background: url(${SignInBackgroundImg}) no-repeat center;
	background-size: cover;
`;
