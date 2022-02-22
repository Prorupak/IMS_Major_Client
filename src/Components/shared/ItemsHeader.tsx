import React from 'react';
// eslint-disable-next-line object-curly-newline
import {
  Button,
  Icon as Icons,
  IconButton,
  ButtonWrapper,
  Text,
  Title
} from 'Themes/utilityThemes';
import styled from 'styled-components';
import Icon from 'Assets/Icons/Icon';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 var(--spacing-15);
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-5);
`;

const RightSection = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: var(--spacing-15);
`;

const Tips = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--spacing-5);
  &:hover {
    filter: saturate(0.6);
  }
`;

const ProductsNav = () => {
  return (
    <>
      <Nav>
        <LeftSection>
          <Title>All Products Categories</Title>
          <Icons src={Icon.DrpDwn} />
        </LeftSection>
        <RightSection>
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
          <Tips>
            <IconButton src={Icon.Tips} />
            <Text>Page Tips</Text>
          </Tips>
        </RightSection>
      </Nav>
    </>
  );
};

export default ProductsNav;
