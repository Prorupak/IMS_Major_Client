/* eslint-disable indent */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainWrapper = styled.div`
  background: ${(props) => {
    return props.theme.color.SidebarBack;
  }};
  width: ${(props) => {
    return props.theme.emSizes.p255x;
  }};
  height: 95.3vh;

  }
`;

export const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => {
    return props.theme.emSizes.p12x;
  }};
`;

export const ListItemText = styled.p``;

export const ListItemIcon = styled.img``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* padding: ${(props) => {
    return props.theme.emSizes.p25x;
  }};
  0  0 
  ${(props) => {
    return props.theme.emSizes.p15x;
  }}; */

  padding: 25px 15px;

.ListItemWrapper{
  
`;

export const DashSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => {
    return props.theme.emSizes.p15x;
  }};
`;

export const SalesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => {
    return props.theme.emSizes.p15x;
  }};
`;

export const PurchaseSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => {
    return props.theme.emSizes.p15x;
  }};
`;

export const IntSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => {
    return props.theme.emSizes.p15x;
  }};
`;

export const Document = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => {
    return props.theme.emSizes.p15x;
  }};
`;

export const Line = styled.div`
    width: 215px;
    border: 1px solid #979797;
    margin:${(props) => {
      return props.theme.emSizes.p20x;
    }} 0};
`;

export const QLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${(props) => {
    return props.theme.emSizes.p12x;
  }};
  /* gap-column: 10px; */
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => {
    return props.theme.fontSize.p15x;
  }};
  line-height: 22px;
  color: ${(props) => {
    return props.theme.color.primWhite;
  }};
`;

export const Mini = styled.div`
  width: ${(props) => {
    return props.theme.emSizes.p255x;
  }};
  height: ${(props) => {
    return props.theme.emSizes.p45x;
  }};
  background: ${(props) => {
    return props.theme.color.SidebarBtm;
  }};
  position: absolute;
  bottom: 0;
`;

export const Icon = styled.img`
  margin: 9px 0 0 125px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DropDownIcon = styled.img`
position: relative;
left: 106px;
}
`;

export const MapWrapper = styled.div`
  &:hover {
    background: #000;
    width: 100%;
  }
`;
