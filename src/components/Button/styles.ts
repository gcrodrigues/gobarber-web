import styled from 'styled-components';
import { shade } from 'polished';

export const ButtonComponent = styled.button`
	background: #ff9000;
	height: 56px;
	border-radius: 10px;
	border: 0;
	padding: 0 16px;
	width: 100%;
	font-weight: 500;
	color: #312e38;
	margin-top: 16px;
	transition: background 0.2s;

	&:hover {
		background: ${shade(0.2, '#ff9000')};
	}
`;
