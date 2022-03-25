import React from 'react';
// eslint-disable-next-line object-curly-newline
import {
  Button,
  Icon as Icons,
  IconButton,
  ButtonWrapper,
  Title
} from 'Themes/utilityThemes';
import styled from 'styled-components';
import Icon from 'Assets/Icons/Icon';
import { TooltipMui } from 'Themes/MaterialUI';
import { Link } from 'react-router-dom';
import PageTips from './PageTips';

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

const IconToggle = styled(Icons).attrs({})`
  /* position: absolute;
  top: 0;
  bottom: 0; */
`;

interface IProps {
  value: boolean;
  toggleHandle: (action: any) => void;
}

const ProductsNav: React.FC<IProps> = ({ value, toggleHandle }) => {
  console.log('value==>', value);
  return (
    <>
      <Nav>
        <LeftSection>
          <Title>All Products Categories</Title>
          <Icons src={Icon.DrpDwn} />
        </LeftSection>
        <RightSection>
          {value ? (
            ''
          ) : (
            <TooltipMui title="Product Details">
              <IconToggle alt="Icon" onClick={toggleHandle} src={Icon.Menu} />
            </TooltipMui>
          )}
          <ButtonWrapper>
            <Button>
              <IconButton src={Icon.ListView} />
            </Button>
            <Link to="/add">
              <Button style={{ background: 'var(--color-secondary)' }}>
                <IconButton src={Icon.BPlus} />
                <p>New</p>
              </Button>
            </Link>
            <Button>
              <IconButton src={Icon.Align} />
            </Button>
          </ButtonWrapper>
          <PageTips />
        </RightSection>
      </Nav>
    </>
  );
};

export default ProductsNav;
