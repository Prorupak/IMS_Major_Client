import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useToggle from '../../Hooks/useToggle';
import Layout from '../../Components/layout/Layout';
import ProductsNav from './Components/ProductsNav';
import Categories from '../Categories/Categories';
import ProductsData from './Components/ ProductsData';
import ProductDetails from './Components/productDetails/productDetails';

const Grid = styled(motion.div)`
  display: grid;
  grid-template-areas:
    'navbar navbar'
    ' main product'
    ' main product';
  grid-template-rows: 45px 100vh auto;
  grid-template-columns: auto 70rem;
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
  grid-area: main;
  border-right: 1px solid rgba(0, 0, 0, 0.04);
`;

const Product = styled(motion.div).attrs({
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 }
})`
  grid-area: product;
`;

const Products = () => {
  const { toggle } = useToggle();

  return (
    <>
      <Layout>
        <Grid>
          <Nav>
            <ProductsNav />
          </Nav>
          <Main>
            <Categories />
          </Main>
          {toggle ? (
            <Product>
              <ProductsData>
                <ProductDetails />
              </ProductsData>
            </Product>
          ) : null}
        </Grid>
      </Layout>
    </>
  );
};

export default Products;
