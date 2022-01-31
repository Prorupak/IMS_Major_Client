import React from 'react';
import * as Elements from '../../Styles/Elements.Form';
import Header from '../form/FormHeader/Header';
import { useDocumentTitle } from '../../Hooks';

const FormSection = () => {
  useDocumentTitle('Login to IMS');

  return (
    <>
      <Elements.FormWrapper>
        <Elements.Form noValidate>
          <Header />
          <Elements.FormInputs>
            <Elements.Email />
            {/* <Error>{emailMessages}</Error> */}
          </Elements.FormInputs>
          <Elements.FormInputs>
            <Elements.Password />
            {/* <Error>{passwordMessages}</Error> */}
          </Elements.FormInputs>
          <Elements.Submit type="submit" variant="contained">
            Sign in
          </Elements.Submit>
          {/* <Error>{incorrectMessages}</Error> */}
        </Elements.Form>
      </Elements.FormWrapper>
    </>
  );
};

export default FormSection;
