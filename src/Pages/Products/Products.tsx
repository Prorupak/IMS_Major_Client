import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '../../Components/layout/Layout';
import ProductsNav from './Components/ProductsNav';
import Categories from '../Categories/Categories';
import CatSide from './Components/CatSide';
import ProductsData from './Components/ ProductsData';
import ProductDetails from './Components/productDetails/productDetails';

const Grid = styled(motion.div)`
  display: grid;
  grid-template-areas:
    'sidebar navbar navbar'
    'sidebar main product'
    'sidebar main product';
  grid-template-rows: 45px 100vh auto;
  grid-template-columns: 12.5rem auto 28.125rem;
  height: 100vh;
`;

const CatSection = styled(motion.div).attrs({
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 }
})`
  min-width: 0px;
  grid-area: sidebar;
  background-color: var(--color-sidebar);
  box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.03);
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
  return (
    <>
      <Layout>
        <Grid>
          <Nav>
            <ProductsNav />
          </Nav>
          <CatSection>
            <CatSide />
          </CatSection>
          <Main>
            <Categories />
          </Main>
          <Product>
            <ProductsData>
              <ProductDetails />
            </ProductsData>
          </Product>
        </Grid>
      </Layout>
    </>
  );
};

export default Products;
