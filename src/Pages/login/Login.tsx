import Image from 'Assets/Image/Image';
import { motion } from 'framer-motion';
import { useDocumentTitle } from 'Hooks';
import React from 'react';
import styled from 'styled-components';
import Form from './Form';

const Container = styled(motion.section).attrs({})`
  overflow: hidden;
  background: url(${Image.Bg}) transparent;
  background-size: auto 100%;
  display: grid;
  place-content: center;
  width: 100%;
  height: 100vh;
`;

const Grid = styled(motion.div).attrs({})`
  background-color: #fff;
  box-shadow: 0px 2px 30px #ccc6;
  padding: 30px 25px;
  display: grid;
  min-width: 900px;
  min-height: 40vh;
  grid-template-areas:
    'form ad'
    'footer ad';
  grid-template-rows: auto auto;
  grid-template-columns: auto auto;
`;

const FormContainer = styled(motion.div).attrs({})`
  grid-area: form;
`;

const Footer = styled(motion.div).attrs({})`
  grid-area: footer;
`;

const Ad = styled(motion.div).attrs({})`
  grid-area: ad;
`;

const Login = () => {
  useDocumentTitle('Hamro Accounts');
  return (
    <>
      <Container>
        <Grid>
          <FormContainer>
            <Form />
          </FormContainer>
          <Footer />
          <Ad />
        </Grid>
      </Container>
    </>
  );
};

export default Login;

