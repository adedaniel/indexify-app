import styled from 'styled-components';

type InputProps = {
  width?: string;
};

const Input = styled.input<InputProps>`
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  background-color: white;
  height: 41px;
  width: ${({ width }) => width || '100%'};
  padding-left: 0.5rem;
`;

export default Input;
