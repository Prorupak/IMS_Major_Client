/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
  height: ${(props) => { return props.theme.emSizes.p50x }};
  background: ${({ theme }) => {
    return theme.color.navBack;
  }};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0
  ${(props) => { return props.theme.emSizes.p20x }}
`;

export const LogoSection = styled.div`
  position: relative;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => {
    return theme.color.logoBack;
  }};
  width: ${({ theme }) => {
    return theme.emSizes.p255x;
  }};
  height: ${({ theme }) => {
    return theme.emSizes.p50x;
  }};
`;

export const Logo = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 31px;
  line-height: 38px;
  color: ${({ theme }) => {
    return theme.color.logo;
  }};
`;

export const LeftIcons = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => { return props.theme.emSizes.p30x }};

`;

export const Icon = styled.img``;

export const RightIcons = styled.div`
position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => { return props.theme.emSizes.p40x }};
  margin-right: ${(props) => { return props.theme.emSizes.p20x }};
`

export const ProfileTxt = styled.div`
display: flex;
align-items: center;
gap: ${(props) => { return props.theme.emSizes.p10x }}
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: normal;
font-size: ${(props) => { return props.theme.fontSize.p14x }};
line-height: 19px;
`

export const MiddleIcons = styled.div`
  display: flex;
  align-items: center;
  gap:${(props) => { return props.theme.emSizes.p25x }};
`

/* export const Name = styled.p`
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: normal;
font-size: ${(props) => { return props.theme.fontSize.p13x }};
line-height: 19px;

` */
