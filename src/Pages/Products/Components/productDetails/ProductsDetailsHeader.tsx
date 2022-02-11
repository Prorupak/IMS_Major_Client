import React from 'react';
import styled from 'styled-components';
import useToggle from '../../../../Hooks/useToggle';
import {
  Button,
  Icon as Icons,
  IconButton,
  ButtonWrapper
} from '../../../../Themes/GlobalStyles';
import Icon from '../../../../Assets/Icons/Icon';
import * as Elements from '../../../../Styles/Elements.ProductsNav';
// import useToggle from '../../../../Hooks/useToggle';

const Nav = styled.nav``;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
  padding: var(--spacing-10) var(--spacing-15);
  .is-close {
    min-width: 20px;
  }
`;

const RightSection = styled.div`
  cursor: pointer;
`;

const ProductsDetailsHeader: React.FC = () => {
  const { handleClose } = useToggle();
  return (
    <>
      <Nav>
        <Wrapper>
          <Elements.LeftSection>
            <ButtonWrapper>
              <Button>
                <IconButton src={Icon.Edit} />
              </Button>
              <Button style={{ background: 'var(--color-secondary)' }}>
                <IconButton src={Icon.BPlus} />
                <p>Add Item</p>
              </Button>
              <Button>
                <span>More</span>
                <IconButton src={Icon.DrpDwn} />
              </Button>
            </ButtonWrapper>
          </Elements.LeftSection>
          <RightSection onClick={handleClose}>
            <Icons src={Icon.Close} />
          </RightSection>
        </Wrapper>
      </Nav>
    </>
  );
};

export default ProductsDetailsHeader;
