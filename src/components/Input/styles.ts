import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface IContainer {
	isFocused: boolean;
	isFilled: boolean;
	hasError: boolean;
}

const inputFocused = css`
	color: #ff9000;
	border-color: #ff9000;
`;

const inputFilled = css`
	color: #ff9000;
`;

const inputError = css`
	border-color: #c53030;
	color: #c53030;
`;

export const Container = styled.div<IContainer>`
	color: #666360;
	background: #232129;
	border-radius: 10px;
	border: 2px solid #232129;
	padding: 16px;
	width: 100%;

	display: flex;
	align-items: center;

	${({ hasError }) => hasError && inputError}
	${({ isFocused }) => isFocused && inputFocused}
	${({ isFilled }) => isFilled && inputFilled}

	input {
		color: #f4ede8;
		background: transparent;
		flex: 1;
		border: 0;

		&::placeholder {
			color: #666360;
		}
	}

	& + div {
		margin-top: 8px;
	}

	svg {
		margin-right: 16px;
	}
`;

export const Error = styled(Tooltip)`
	height: 20px;
	margin-left: 16px;

	svg {
		margin: 0;
	}
`;
