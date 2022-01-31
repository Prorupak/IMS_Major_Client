import React from 'react';
import styled from 'styled-components';
import Categories from '../Categories/Categories';
import ProductsData from './Components/ ProductsData';
import Layout from '../../layout/Layout';
import ProductsLayout from '../../layout/ProductsLayout/ProductsLayout';
import { useDocumentTitle } from '../../Hooks';

const Grid = styled.div`
  display: grid;
  grid-template: 500px 100vw / 200 / auto;
`;
const CatResult = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 /2;
  min-height: 100%;
  min-width: 500px;
`;

const CatData = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 2;
`;

// const Hr = styled.div`
//   border: 0.5px solid #c1c1c1;
//   transform: rotate(90deg);
//   /* overflow: hidden; */
// `;

const Products = () => {
  useDocumentTitle('Categories');
  return (
    <Layout>
      <ProductsLayout>
        <Grid>
          <CatResult>
            {/* <Hr /> */}
            <Categories />
          </CatResult>
          <CatData>
            <ProductsData />
          </CatData>
        </Grid>
      </ProductsLayout>
    </Layout>
  );
};

export default Products;
