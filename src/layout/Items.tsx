import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Icon as Icons } from 'Themes/utilityThemes';
import Icon from 'Assets/Icons/Icon';
import { useLocation } from 'react-router';
import { ToggleContext } from 'Hooks/useToggle';
import Header from 'Components/shared/ItemsHeader';
import ProductsData from 'Components/shared/ ProductsData';

const Grid = styled(motion.div)<{ toggle: boolean }>`
  display: grid;

  grid-template-areas:
    'navbar navbar'
    'main product '
    'main product';
  grid-template-rows: 45px auto;
  grid-template-columns: auto ${({ toggle }) => (toggle ? 'auto' : '0')};
  height: 100vh;
`;

const Nav = styled(motion.div).attrs({
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 }
})`
  display: grid;
  align-items: center;
  grid-area: navbar;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.03);
`;

const Main = styled(motion.div).attrs({
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 }
})`
  position: relative;
  overflow: scroll;
  grid-area: main;
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-15);
  border-right: 1px solid rgba(0, 0, 0, 0.04);
`;

const Product = styled(motion.div).attrs({
  initial: { x: 300, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 300, opacity: 0 },
  transition: { duration: 0.3 }
})`
  overflow: scroll;
  grid-area: product;
`;

const IconToggle = styled(Icons).attrs({})`
  position: absolute;
  top: 0;
  bottom: 0;
`;

interface IProps {
  children: React.ReactNode;
}

const Items: React.FC<IProps> = ({ children }) => {
  const { value, toggleHandle } = React.useContext(ToggleContext);

  const location = useLocation();
  console.log('location===', location && location.state);

  return (
    <>
      <Grid toggle={value}>
        <Nav>
          <Header />
        </Nav>
        <Main>
          {value ? (
            ''
          ) : (
            <IconToggle alt="Icon" onClick={toggleHandle} src={Icon.Menu} />
          )}
          {children}
        </Main>
        {value ? (
          <Product>
            <ProductsData />
          </Product>
        ) : null}
      </Grid>
    </>
  );
};

export default Items;
