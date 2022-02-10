/* eslint-disable indent */
import styled from 'styled-components';
// import theme from '../../Themes/theme';

export const Nav = styled.nav`
  width: 100%;
`;

export const NavWrapper = styled.div`
  height: ${(props) => {
    return props.theme.emSizes.p60x;
  }};

  display: flex;
`;

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => {
    return props.theme.color.white;
  }};
  width: 100%;
  margin: 0
    ${(props) => {
      return props.theme.emSizes.p15x;
    }};
`;

export const RightIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const LeftIcons = styled.div`
  display: flex;
  gap: ${(props) => {
    return props.theme.emSizes.p35x;
  }};
  align-items: center;
`;

export const MiddleIcons = styled.div`
  display: flex;
  gap: 35px;
`;

export const Icon = styled.img``;
