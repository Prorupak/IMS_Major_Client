import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template:
    [row-1-start] min-content
    [row-1-end row-2-start] 1fr
    [row-end]/ min-content 1fr;
  /* grid-template: 'nav header' min-content 'nav main' 1fr / min-content 1fr; */
`;

export const GridNav = styled.div`
  grid-area: row-1-start / 1 / row-end / 2;
  background-color: #345b63;
  color: #fff;
`;

export const GridHeader = styled.header`
  grid-area: 1 / 2 / span 1 / 2;
`;

export const GridMain = styled.main`
  display: grid;
  grid-area: row-2-start / 2 / row-end / 3;
  /* place-content: center; */
  height: 100%;
  color: #000;
  background-color: #fff;
`;
