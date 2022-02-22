/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios';
import ProductDetails from 'Pages/Categories/productDetails';
import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { getCategories } from '../../api/api';
import ProductsDetailsHeader from './ItemDetailsHeader';
import ProductsContainer from './ProductsContainer';

const Grid = styled.div`
  display: grid;
  grid-template: 500px 100vw / 200 / auto;
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.04);
  background: #fff;
`;

const Section = styled.section``;

const ProductsData: React.FC = () => {
  return (
    <>
      <Grid>
        <Header>
          <ProductsDetailsHeader />
        </Header>
        <Section>
          <ProductsContainer>
            <ProductDetails />
          </ProductsContainer>
        </Section>
      </Grid>
    </>
  );
};

export default ProductsData;
