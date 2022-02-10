/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// import useToggle from '../../Hooks/useToggle';
// import CatSide from '../../Pages/Products/Components/CatSide';
// import ProductsNav from '../../Pages/Products/Components/ProductsNav';
import * as Elements from '../../Styles/Elements.ProductsLayout';

const ProductsLayout = ({ children, ...rest }: any) => {
  // const { toggle } = useToggle();
  // const [toggle, setToggle] = React.useState<boolean>(false)
  return (
    <>
      <Elements.Grid {...rest}>
        {/* {toggle ? (
          <Elements.GridNav>
            <CatSide />
          </Elements.GridNav>
        ) : null} */}
        {/* <Elements.GridHeader>
          <ProductsNav />
        </Elements.GridHeader> */}
        <Elements.GridMain>{children}</Elements.GridMain>
      </Elements.Grid>
    </>
  );
};

export default ProductsLayout;
