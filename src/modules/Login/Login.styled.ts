import styled from 'styled-components';
import Input from 'components/Input/Input';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #fbfbfb;
`;

export const LogoImage = styled.img`
  margin-bottom: 2.5rem;
`;

export const LoginCard = styled.form`
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  background-color: white;
  width: 24.5rem;
  padding: 3.25rem 3rem;
`;

export const LoginHeading = styled.h1`
  font-size: large;
  margin-bottom: 2.5rem;
`;

export const InputCaption = styled.p`
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
`;

export const LoginInput = styled(Input)`
  margin-bottom: 2.5rem !important;
`;
