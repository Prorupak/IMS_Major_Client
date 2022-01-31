import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template: var(--spacing-45) 80vh / var(--size-secSidebar) auto;
`;

export const GridNav = styled.div`
  position: relative;
  z-index: 1;
  grid-row: auto / span 4;
  grid-column: 1 / 2;
  background-color: var(--color-sidebar);
  box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.03);
  flex-flow: 1;
`;

export const GridHeader = styled.header`
  position: relative;
  display: grid;
  align-items: center;
  z-index: 9999;
  grid-row: 1 / 2;
  grid-column: 2 / 4;
  background-color: #fff;
  padding: 10px 15px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
`;

export const GridMain = styled.main`
  grid-row: 2 / 3;
  grid-column: 2 / 4;
`;
