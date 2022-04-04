import { motion } from 'framer-motion';
import { ToggleContext } from 'Hooks/useToggle';
import React from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import CompHeader from './Components/productDetails/CompHeader';

const Grid = styled(motion.div).attrs({})`
  display: grid;
  grid-template-areas:
    'header header'
    'content content';
  grid-template-rows: auto auto;
  grid-template-columns: 100vh 100vh;
  padding: var(--spacing-15) var(--spacing-15);
`;

const Header = styled(motion.nav).attrs({})`
  grid-area: header;
  display: flex;
  flex-direction: column;
`;

const Body = styled(motion.div).attrs({})`
  grid-area: content;
  display: flex;
  justify-content: space-between;
`;

const LeftDetails = styled(motion.div).attrs({})``;

const RightDetails = styled(motion.div).attrs({})``;

const PrimaryDetails = styled(motion.div).attrs({})``;

const SalesInfo = styled(motion.div).attrs({})``;

const Summary = styled(motion.div).attrs({})``;

const ImageContainer = styled(motion.div).attrs({})``;

const StockSummary = styled(motion.div).attrs({})``;

const ProductsDetails = () => {
  const location = useLocation();

  const { toggleHandle } = React.useContext(ToggleContext);

  // @ts-ignore
  const ids = location && location.state && location.state.row;

  console.log('row=>>>>', ids);
  // @ts-ignore
  const catName = location && location.state && location.state.catName;

  return (
    <Grid>
      <Header>
        <CompHeader />
      </Header>
      <Body>
        <LeftDetails>
          <PrimaryDetails>
            <p>primary</p>
          </PrimaryDetails>
          <SalesInfo>
            <p>sales info</p>
          </SalesInfo>
          <Summary>
            <p>summary</p>
          </Summary>
        </LeftDetails>
        <RightDetails>
          <ImageContainer>
            <p>image</p>
          </ImageContainer>
          <StockSummary>
            <p>stock summary</p>
          </StockSummary>
        </RightDetails>
      </Body>
    </Grid>
  );
};

export default ProductsDetails;

