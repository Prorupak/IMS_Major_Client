import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router';
import Header from 'Components/shared/ItemsHeader';
import ProductsData from 'Components/shared/ ProductsData';
import { ToggleContext } from 'Hooks/useToggle';
import ProductsDetails from 'Pages/Products/ProductsDetails';

const Grid = styled(motion.div)<{ toggle: boolean }>`
  display: grid;

  grid-template-areas:
    'navbar navbar'
    'main product '
    'main product';
  grid-template-rows: 45px auto;
  grid-template-columns: auto ${({ toggle }) => (toggle ? '80em' : '0')};
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
  /* box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.03); */
  border: 1px solid rgba(0, 0, 0, 0.03);
`;

const Main = styled(motion.div).attrs({
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 }
})`
  position: relative;
  grid-area: main;
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-15);
  border-right: 1px solid rgba(0, 0, 0, 0.04);
`;

const Products = styled(motion.div).attrs({
  initial: { x: 300, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 300, opacity: 0 },
  transition: { duration: 0.3 }
})`
  overflow: scroll;
  grid-area: product;
`;

interface IProps {
  children: React.ReactNode;
}

const Product: React.FC = ({ children }: any) => {
  const { value, toggleHandle } = React.useContext(ToggleContext);
  // const { value, toggleHandle } = useToggle('itemToggle', false);

  const location = useLocation();
  console.log('location===', location && location.state);

  return (
    <>
      <Grid toggle={value}>
        <Nav>
          <Header toggleHandle={toggleHandle} value={value} />
        </Nav>
        <Main>
          {/* <Categories toggleHandle={toggleHandle} /> */}
          {children}
        </Main>
        {value ? (
          <Products>
            {/* <ProductsData toggle={toggleHandle} /> */}
            <ProductsDetails />
          </Products>
        ) : null}
      </Grid>
    </>
  );
};

export default Product;

