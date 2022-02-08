import React from 'react';
// eslint-disable-next-line object-curly-newline
import Icon from '../../../Assets/Icons/Icon';
import * as Elements from '../../../Styles/Elements.ProductsNav';
import { Button } from '../../../Themes/GlobalStyles';

const ProductsNav = () => {
  return (
    <>
      <Elements.Nav>
        <Elements.LeftSection>
          <Elements.Title>All Products Categories</Elements.Title>
          <Elements.Icon src={Icon.DrpDwn} />
        </Elements.LeftSection>
        <Elements.RightSection>
          <Elements.ButtonWrapper>
            <Button>
              <Elements.IconButton src={Icon.ListView} />
            </Button>
            <Button style={{ background: 'var(--color-secondary)' }}>
              <Elements.IconButton src={Icon.BPlus} />
              <p>New</p>
            </Button>
            <Button>
              <Elements.IconButton src={Icon.Align} />
            </Button>
          </Elements.ButtonWrapper>
          <Elements.Tips>
            <Elements.IconButton
              src={Icon.Tips}
              style={{ width: '20px', height: '20px' }}
            />
            <Elements.Text>Page Tips</Elements.Text>
          </Elements.Tips>
        </Elements.RightSection>
      </Elements.Nav>
    </>
  );
};

export default ProductsNav;
