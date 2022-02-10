import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'body';

  grid-template-rows: auto auto 100%;

  margin: var(--spacing-15) var(--spacing-15);
`;

export const Wrapper = styled.div``;

export const Header = styled.header`
  grid-area: header;
  grid-row: span 1;
  margin: var(--spacing-5) 0;
`;

export const Content = styled.section`
  grid-area: content;
  /* margin: var(--spacing-10) var(--spacing-10); */
`;

export const Body = styled.section`
  grid-area: body;
  min-height: 100vh;
`;

export const ColorWrapper = styled.div`
  /* display: flex; */
`;

export const Colors = styled.div`
  display: flex;
  flex-wrap: 3;
  min-width: 50%;
  max-width: 100%;
`;
