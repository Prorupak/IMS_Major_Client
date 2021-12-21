/* eslint-disable import/prefer-default-export */

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainWrapper = styled.div`
position: absolute;
top: 49px;
left: 270px;
  width: ${(props) => {
    return props.theme.emSizes.p535x;
  }};
  height: ${(props) => {
    return props.theme.emSizes.p285x;
  }};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
  border: 0.1px solid rgba(0, 0, 0, 0.03);
`;

export const QuickActionWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  margin: ${(props) => { return props.theme.emSizes.p30x }} ${(props) => { return props.theme.emSizes.p15x }};
  gap: ${(props) => {
    return props.theme.emSizes.p40x;
  }};
`;

export const GeneralSection = styled.div`
  /* display: flex; */
`;

export const SalesSection = styled.div``;

export const PurchasesSection = styled.div``;

export const Title = styled.div`
  display: flex;
  /* align-items: center; */
  gap:${(props) => { return props.theme.emSizes.p10x }};

  p {
  position: relative;
    top:5px;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: ${(props) => {
    return props.theme.fontSize.p12x;
  }};
    line-height: 18px;
    color: ${(props) => {
    return props.theme.color.QuickActionHeader;
  }};
  }
`;

export const Icon = styled.img`
  cursor: pointer;
`;

export const ListIcon = styled.div`
  display:flex;
`

export const QuickActionList = styled.ul`
  display: grid;
  margin: ${(props) => { return props.theme.emSizes.p25x }} 0 0 0;
  /* flex-direction: column; */
  gap:${(props) => { return props.theme.emSizes.p10x }};
`;

export const QLink = styled(Link)`
  display: flex;
  gap:${(props) => { return props.theme.emSizes.p12x }};

  color: ${(props) => {
    return props.theme.color.QuickAction;
  }};

  .ListItemWrapper{
    display: flex;
  }
`;
