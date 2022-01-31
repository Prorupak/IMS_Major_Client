import React from 'react';
import * as Elements from '../../Styles/Elements.Login';
import ImageWrapper from '../../Components/shared/ImageWrapper';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <>
      <Elements.MainWrapper>
        <ImageWrapper />
        <LoginForm />
      </Elements.MainWrapper>
    </>
  );
};

export default Login;
