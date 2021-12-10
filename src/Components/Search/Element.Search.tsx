/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => {
    return props.theme.emSizes.p300x;
  }};
  height: ${(props) => {
    return props.theme.emSizes.p30x;
  }};
  background: ${(props) => {
    return props.theme.color.primWhite;
  }};
  border-radius: ${(props) => {
    return props.theme.emSizes.p15x;
  }};
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.02);
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => {
    return props.theme.emSizes.p15x;
  }};
  margin-left: ${(props) => {
    return props.theme.emSizes.p10x;
  }};
`;

export const Search = styled.input`
  border: none;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${(props) => {
    return props.theme.emSizes.p5x;
  }};
`;

export const Icon = styled.img``;
