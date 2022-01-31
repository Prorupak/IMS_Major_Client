/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import CatSide from '../../Pages/Products/Components/CatSide';
import ProductsNav from '../../Pages/Products/Components/ProductsNav';
import * as Elements from '../../Styles/Elements.ProductsLayout';

const ProductsLayout = ({ children, ...rest }: any) => {
  return (
    <>
      <Elements.Grid {...rest}>
        <Elements.GridNav>
          <CatSide />
        </Elements.GridNav>
        <Elements.GridHeader>
          <ProductsNav />
        </Elements.GridHeader>
        <Elements.GridMain>{children}</Elements.GridMain>
      </Elements.Grid>
    </>
  );
};

export default ProductsLayout;
