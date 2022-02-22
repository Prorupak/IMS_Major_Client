import React from 'react';
import styled from 'styled-components';
import Navbar from '../Components/main/Navbar/Navbar';

const Grid = styled.div`
  position: relative;
  z-index: 999;
  display: grid;
  grid-template:
    [row-1-start] min-content
    [row-1-end row-2-start] 1fr
    [row-end]/ min-content 1fr;
  /* grid-template: 'nav header' min-content 'nav main' 1fr / min-content 1fr; */
`;

const GridNav = styled.div`
  grid-area: row-1-start / 1 / row-end / 2;
  background-color: #345b63;
  color: #fff;
`;

const GridHeader = styled.header`
  grid-area: 1 / 2 / span 1 / 2;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
`;

const GridMain = styled.main`
  grid-area: row-2-start / 2 / row-end / 3;
  color: #000;
  background-color: #fff;
`;

const Layout = ({ children, ...rest }: any) => {
  // const [isOpen, setIsOpen] = React.useState(false);
  // const toggle = () => {
  //   return setIsOpen(!isOpen);
  // };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Grid {...rest}>
      <GridNav />
      <GridHeader>
        <Navbar />
      </GridHeader>
      <GridMain>{children}</GridMain>
    </Grid>
  );
};

export default Layout;
