/* eslint-disable indent */
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  min-width: 237px;
  min-height: 100vh;
  position: relative;
  z-index: 1000;
  &::before {
    content: '';
    position: absolute;
    background-color: #345b63;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
  }
  @media (max-width: 950px) {
    position: fixed;
    min-width: 200px;
    /* display: none; */
    transform: translate3d(-100%, 0, 0);
    transition: transform 0.11s cubic-bezier(0.4, 0, 1, 1) important;
  }
`;

export const Icons = styled.img`
  min-height: 34px;
  min-width: 34px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  margin: 15px 0;

  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  padding: 0 10px;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #f7f7fc;
`;

export const GroupWrapper = styled.div`
  /* margin-top: 20px; */
`;

export const Wrapper = styled.div`
  margin-top: 20px;
`;

export const NavLinkGroup = styled.div`
  /* margin-top: 20px; */
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

// export const Link = styled(NavLink)``;
