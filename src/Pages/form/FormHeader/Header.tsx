import React from 'react';
import { Link } from 'react-router-dom';
import * as Elements from '../../../Styles/Elements.Header';

const Header = () => {
  return (
    <>
      <Elements.HeaderWrapper>
        <Elements.Header>Get started</Elements.Header>
        <Elements.HeaderContent>
          Already have an account?
          <span className="signIn">
            <Link to="/form/login">Sign in</Link>
          </span>
        </Elements.HeaderContent>
      </Elements.HeaderWrapper>
      <Elements.SocialWrapper>
        <Elements.Google>
          <Elements.GoogleIcon />
          <Elements.SocialText>Sign in with Google</Elements.SocialText>
        </Elements.Google>
        <Elements.Facebook>
          <Elements.IconFacebook />
          <Elements.SocialText>Sign in with Facebook</Elements.SocialText>
        </Elements.Facebook>
      </Elements.SocialWrapper>
      <Elements.Separator>or</Elements.Separator>
    </>
  );
};

export default Header;
