/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import ProductsDetailsHeader from './productDetails/ProductsDetailsHeader';

const Grid = styled.div`
  display: grid;
  grid-template: 500px 100vw / 200 / auto;
`;

const Header = styled.header`
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.04);
`;

const Section = styled.section``;

interface IProps {
  children: React.ReactNode;
}

const ProductsData: React.FC<IProps> = ({ children, ...rest }) => {
  return (
    <>
      <Grid {...rest}>
        <Header>
          <ProductsDetailsHeader />
        </Header>
        <Section>{children}</Section>
      </Grid>
    </>
  );
};

export default ProductsData;
