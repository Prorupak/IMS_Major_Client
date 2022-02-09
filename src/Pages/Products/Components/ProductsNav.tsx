import React from 'react';
// eslint-disable-next-line object-curly-newline
import Icon from '../../../Assets/Icons/Icon';
import * as Elements from '../../../Styles/Elements.ProductsNav';
import {
  Button,
  Icon as Icons,
  IconButton,
  ButtonWrapper
} from '../../../Themes/GlobalStyles';

const ProductsNav = () => {
  return (
    <>
      <Elements.Nav>
        <Elements.LeftSection>
          <Elements.Title>All Products Categories</Elements.Title>
          <Icons src={Icon.DrpDwn} />
        </Elements.LeftSection>
        <Elements.RightSection>
          <ButtonWrapper>
            <Button>
              <IconButton src={Icon.ListView} />
            </Button>
            <Button style={{ background: 'var(--color-secondary)' }}>
              <IconButton src={Icon.BPlus} />
              <p>New</p>
            </Button>
            <Button>
              <IconButton src={Icon.Align} />
            </Button>
          </ButtonWrapper>
          <Elements.Tips>
            <IconButton src={Icon.Tips} />
            <Elements.Text>Page Tips</Elements.Text>
          </Elements.Tips>
        </Elements.RightSection>
      </Elements.Nav>
    </>
  );
};

export default ProductsNav;
