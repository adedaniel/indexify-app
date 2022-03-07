import styled from 'styled-components';

type ButtonProps = {
  width?: string;
};

const Button = styled.button<ButtonProps>`
  color: white;
  border-radius: 5px;
  background-color: #428af5;
  height: 38px;
  width: ${({ width }) => width || '100%'};
  font-weight: 700;
  cursor: pointer;
  font-size: 14px;
`;

export default Button;
