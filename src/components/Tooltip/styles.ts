import styled, { css } from 'styled-components';

type IContainer = {
	type: 'warn' | 'success' | 'error' | undefined;
};

const error = css`
	span {
		background: #c53030;
		color: #fff;

		&::before {
			border-color: #c53030 transparent;
		}
	}
`;
const warn = css`
	span {
		background: #ff9000;
		color: #312e38;

		&::before {
			border-color: #ff9000 transparent;
		}
	}
`;
const success = css`
	span {
		background: green;
		color: #fff;

		&::before {
			border-color: green transparent;
		}
	}
`;

export const Container = styled.div<IContainer>`
	position: relative;

	span {
		width: 160px;
		background: #ff9000;
		padding: 8px;
		border-radius: 4px;
		font-size: 14px;
		font-weight: 500;
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.4s;

		position: absolute;
		bottom: calc(100% + 12px);
		left: 50%;
		transform: translateX(-50%);
		color: #312e38;

		&::before {
			content: '';
			border-style: solid;
			border-color: #ff9000 transparent;
			border-width: 6px 6px 0 6px;
			bottom: 20px;
			position: absolute;
			top: 100%;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	${({ type }) => type === 'error' && error}
	${({ type }) => type === 'warn' && warn}
  ${({ type }) => type === 'success' && success}


	&:hover span {
		opacity: 1;
		visibility: visible;
	}
`;
