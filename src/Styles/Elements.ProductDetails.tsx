import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Grid = styled.div`
  overflow-x: hidden;
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'body';

  grid-template-rows: auto auto fill-content;

  margin: var(--spacing-15) var(--spacing-15);
`;

export const Wrapper = styled.div`
  /* overflow: hidden; */
  display: flex;
  gap: 55px;
  width: 100%;
  /* max-width: 400px; */
  max-width: 500px;
  min-height: fit-content;
`;

export const Header = styled.header`
  grid-area: header;
  grid-row: span 1;
  margin: var(--spacing-5) 0;
`;

export const Content = styled.section`
  grid-area: content;
`;

export const Body = styled.section`
  overflow: scroll;
  grid-area: body;
  margin: var(--spacing-5) 0;
`;

export const Headings = styled(motion.div).attrs({})`
  display: flex;
  flex-direction: column;
`;

export const Data = styled(motion.div).attrs({})`
  display: flex;
  flex-direction: column;
`;

export const ColorWrapper = styled.div`
  /* display: flex; */
`;

export const Colors = styled(motion.div).attrs({})`
  overflow: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: proximity;
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  min-height: 0px;
  max-height: 70px;
  min-width: 60rem;
  max-width: 65rem;
`;
