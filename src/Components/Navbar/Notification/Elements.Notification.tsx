/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const MainWrapper = styled.div`
  position: absolute;
  right: 0px;
  width: ${(props) => {
    return props.theme.emSizes.p400x;
  }};
  margin: 5px 0 0 0;
  height: 94.5vh;
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-shadow: -2px 0px 4px rgba(0, 0, 0, 0.08);
`;

export const Wrapper = styled.div``;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => {
    return props.theme.color.NotificationBack;
  }};
`;

export const Header = styled.div`
  margin: ${(props) => {
    return props.theme.emSizes.p30x;
  }}
    ${(props) => {
    return props.theme.emSizes.p20x;
  }};
gap:${(props) => { return props.theme.emSizes.p30x }} ;

  display: flex;
  align-items: center;
`;

export const Title = styled.div`
display: flex;
align-items: center;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => {
    return props.theme.fontSize.p16x;
  }};
  line-height: 24px;
  letter-spacing: 0.01em;
  color: ${(props) => {
    return props.theme.color.textColor;
  }};
`;

export const Icon = styled.img`
gap:${(props) => { return props.theme.emSizes.p30x }};
position: absolute;
right:30px;
`;

export const NoticesSection = styled.div``;

export const Notice = styled.div``;
