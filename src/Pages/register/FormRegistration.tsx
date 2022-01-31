import React from 'react';
// import { Outlet } from 'react-router';
import * as Elements from '../../Styles/Elements.Register';
import RegisterSection from './FormSection';
import ImageWrapper from '../../Components/shared/ImageWrapper';

// handleClose

const FormRegistration = () => {
  // eslint-disable-next-line object-curly-newline
  return (
    <>
      <Elements.MainWrapper>
        <ImageWrapper />
        <RegisterSection />
      </Elements.MainWrapper>
    </>
  );
};

export default FormRegistration;
