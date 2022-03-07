import React, { FormEvent, useState } from 'react';
import { login } from 'api';
import Button from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';
import {
  InputCaption,
  LoginCard,
  LoginHeading,
  LoginInput,
  LoginWrapper,
  LogoImage,
} from './Login.styled';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    const data = await login(email);

    if (data.error) {
      setIsLoading(false);
      alert(data.validation.body.message);
      return;
    }

    localStorage.setItem('indexify_token', data.token);
    navigate('/');
  };

  return (
    <LoginWrapper>
      <LogoImage src="/images/logo.png" />
      <LoginCard onSubmit={handleSubmit}>
        <LoginHeading>Log In to your account</LoginHeading>
        <InputCaption>Email Address</InputCaption>
        <LoginInput
          value={email}
          onChange={event => setEmail(event.target.value)}
          type="email"
          required
        />
        <Button disabled={isLoading}>
          {isLoading ? 'Logging in' : 'Login'}
        </Button>
      </LoginCard>
    </LoginWrapper>
  );
}
