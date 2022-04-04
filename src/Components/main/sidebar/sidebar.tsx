import { motion } from 'framer-motion';
import useToggle from 'Hooks/useToggle';
import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Logo from './logo';
import MainData from './Main';

const Grid = styled(motion.div).attrs({})<{ toggle: boolean }>`
  /* position: relative; */
  display: grid;

  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-template-rows: 3.625rem auto 50px;
  grid-template-columns: 100%;
  height: 100vh;
`;

const Header = styled.div`
  grid-area: header;
  display: grid;
  place-content: center;
  background-color: #fff;
  color: #000;
`;

const Main = styled.div`
  grid-area: main;
  color: aliceblue;
`;

const FooterGrid = styled.div`
  grid-area: footer;
  position: sticky;
  display: grid;
  place-content: center;
  bottom: 0;
  color: #000;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #1d2c38;
  }
`;

interface Props {
  toggle: boolean;
  toggleHandle: (action: any) => void;
}

const Sidebar: React.FC<Props> = ({ toggle, toggleHandle }) => {
  return (
    <Grid toggle={toggle}>
      <Header>
        <Logo />
      </Header>
      <Main>
        <MainData toggle={toggle} toggleHandle={toggleHandle} />
      </Main>
      <FooterGrid>
        <Footer toggle={toggle} toggleHandle={toggleHandle} />
      </FooterGrid>
    </Grid>
  );
};

export default Sidebar;

