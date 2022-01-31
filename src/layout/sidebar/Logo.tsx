/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoContainer = styled.div`
  /* background-color: azure; */
  min-height: 60px;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #e6e6e6;
  margin: 13px 0px;
`;

const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.p`
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
  font-weight: 700;
  &:hover {
    text-decoration: none;
    color: aliceblue;
  }
`;

const Logo = ({ ...props }) => {
  return (
    <LogoContainer {...props}>
      <StyledLogo to="/">
        <LogoText>IMS</LogoText>
      </StyledLogo>
      <Divider />
    </LogoContainer>
  );
};

export default Logo;
