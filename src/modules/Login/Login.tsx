import Button from 'components/Button/Button';
import React, { FormEvent } from 'react';
import {
  InputCaption,
  LoginCard,
  LoginHeading,
  LoginInput,
  LoginWrapper,
  LogoImage,
} from './Login.styled';

export default function Login() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <LoginWrapper>
      <LogoImage src="/images/logo.png" />
      <LoginCard>
        <LoginHeading>Log In to your account</LoginHeading>
        <InputCaption>Email Address</InputCaption>
        <LoginInput type="email" required />
        <Button>Login</Button>
      </LoginCard>
    </LoginWrapper>
  );
}
