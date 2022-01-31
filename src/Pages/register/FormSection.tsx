import React from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router';
import Header from '../form/FormHeader/Header';
import { Error } from '../../Themes/GlobalStyles';

import * as Elements from '../../Styles/Elements.Form';

const RegisterSection = () => {
  return (
    <>
      <Elements.FormWrapper>
        <Elements.Form noValidate>
          <Header />
          <Elements.FormInputs>
            <Elements.Name />
          </Elements.FormInputs>
          <Elements.FormInputs>
            <Elements.Email />
          </Elements.FormInputs>
          <Elements.FormInputs>
            <Elements.Password />
          </Elements.FormInputs>
          <Error>hello</Error>

          <Elements.Submit type="submit" variant="contained">
            Sign up
          </Elements.Submit>
        </Elements.Form>
      </Elements.FormWrapper>
    </>
  );
};

export default RegisterSection;
