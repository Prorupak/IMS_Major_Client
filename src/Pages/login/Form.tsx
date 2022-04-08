/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';
import axios from 'axios';
import { InputAdornment, TextField } from '@mui/material';
import Icon from 'Assets/Icons/Icon';
import { ButtonMain } from 'Pages/register/Form';
import React, { useEffect, useRef, useState } from 'react';
import { InputIcon } from 'Themes/utilityThemes';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import { useInput } from 'Hooks/useInput';
import validation from 'validation/validation';
import useAuth from 'Hooks/useAuth';
import { AuthContext, setSession } from 'HOC/WithAuth';
import usePost from 'Hooks/usePost';

const Container = styled(motion.section).attrs({})`
  margin: 0 20px;
  display: flex;
  gap: 20px;
  flex-flow: column;

  .fPwd {
    position: relative;
    left: 22%;
    top: -20px;
  }
`;

const Logo = styled(motion.img).attrs({})`
  width: 70px;
  height: 70px;
`;

const LoginForm = styled(motion.form).attrs({})`
  display: flex;
  width: 100%;
  gap: 10px;
  flex-flow: column;
  /* align-items: ce; */
`;

const Heading = styled(motion.div).attrs({})``;

const Wrapper = styled(motion.div).attrs({})`
  width: 100%;
  .instructions {
    font-size: 0.75rem;
    color: var(--color-error);
    position: relative;
  }
  .offscreen {
    position: absolute;
    left: -9999px;
  }
`;

const Error = styled(motion.div).attrs({})``;

const Form = () => {
  const emailRef = useRef({} as HTMLInputElement);
  const passwordRef = useRef({} as HTMLInputElement);

  const email = useInput('');
  const [validName, setValidName] = useState(false);

  const password = useInput('');
  const [validPassword, setValidPassword] = useState(false);

  // validation
  useEffect(() => {
    setValidName(email.value.length > 0);
    setValidPassword(password.value.length > 0);
  }, [email.value, password.value]);

  useEffect(() => {
    emailRef.current.focus();
    passwordRef.current.focus();
  }, []);

  const postData = {
    email: email.value,
    password: password.value
  };
  // eslint-disable-next-line object-curly-newline
  const { error, handleSubmit, loading, value } = usePost(
    'http://localhost:9001/api/auth/login',
    postData,
    '/details'
  );

  return (
    <>
      <Container>
        <Logo src={Icon.FaceIc} />
        <Heading>
          <p className="heading">Sign In</p>
          <p className="subHeading">to access Inventory</p>
        </Heading>
        <LoginForm onSubmit={handleSubmit}>
          <Wrapper>
            <TextField
              ref={emailRef}
              aria-describedby="uidNote"
              aria-invalid={validName ? 'false' : 'true'}
              id="input-with-sx"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <InputIcon alt="company" src={Icon.userCreate} />
                  </InputAdornment>
                )
              }}
              label={null}
              {...email.inputAttrs}
              placeholder="Email or Mobile Number"
              size="small"
              sx={{
                width: '70%'
              }}
              type="email"
              variant="outlined"
            />
            <Error
              className={
                email.focused && email.value && !validName
                  ? 'instructions'
                  : 'offscreen'
              }
              id="uidNote">
              Enter Password
            </Error>
          </Wrapper>
          <Wrapper>
            <TextField
              ref={passwordRef}
              aria-describedby="uidNote"
              aria-invalid={validPassword ? 'false' : 'true'}
              id="input-with-sx"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <InputIcon alt="company" src={Icon.Password} />
                  </InputAdornment>
                )
              }}
              label={null}
              {...password.inputAttrs}
              placeholder="Password"
              size="small"
              sx={{
                width: '70%'
              }}
              type="password"
              variant="outlined"
            />
            <Error
              className={
                password.focused && password.value && !validPassword
                  ? 'instructions'
                  : 'offscreen'
              }
              id="uidNote">
              Please enter a valid company name.
            </Error>
          </Wrapper>
          {error && <p className="instructions">{error}</p>}
          <ButtonMain
            disabled={!validName || !validPassword}
            sx={{
              width: '70%',
              margin: '10px 0 0 0'
            }}
            type="submit"
            variant="contained">
            Login
          </ButtonMain>
          <Wrapper />
        </LoginForm>
        <p className="fPwd">Forget Password?</p>
      </Container>
    </>
  );
};

export default Form;




