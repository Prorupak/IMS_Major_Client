import React from 'react';
import styled from 'styled-components';
import Categories from '../Categories/Categories';
import ProductsData from './Components/ ProductsData';
import Layout from '../../layout/Layout';
import ProductsLayout from '../../layout/ProductsLayout/ProductsLayout';
import { useDocumentTitle } from '../../Hooks';
import ProductDetails from './Components/productDetails/productDetails';

const Grid = styled.div`
  display: grid;
  grid-template: 500px 100vw / 200 / auto;
`;
const CatResult = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 /2;
  min-height: 100vh;
  min-width: 500px;
  border-right: 0.5px solid var(--color-border);
`;

const CatData = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 2;
`;

const Products = () => {
  useDocumentTitle('Categories');
  return (
    <Layout>
      <ProductsLayout>
        <Grid>
          <CatResult>
            <Categories />
          </CatResult>
          <CatData>
            <ProductsData>
              <ProductDetails />
            </ProductsData>
          </CatData>
        </Grid>
      </ProductsLayout>
    </Layout>
  );
};

export default Products;
