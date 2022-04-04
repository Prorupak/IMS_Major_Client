import { IconButton } from '@mui/material';
import Icon from 'Assets/Icons/Icon';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { Icon as Icons } from 'Themes/utilityThemes';

const Grid = styled(motion.div).attrs({})``;

const Header = styled(motion.nav).attrs({})``;

const Body = styled(motion.div).attrs({})``;

const LeftDetails = styled(motion.div).attrs({})``;

const RightDetails = styled(motion.div).attrs({})``;

const PrimaryDetails = styled(motion.div).attrs({})``;

const SalesInfo = styled(motion.div).attrs({})``;

const Summary = styled(motion.div).attrs({})``;

const ImageContainer = styled(motion.div).attrs({})``;

const StockSummary = styled(motion.div).attrs({})``;

const ProductsDetails = () => {
  return (
    <Grid>
      <Header>
        <p>Product</p>
        <IconButton>
          <Icons src={Icon.Close} />
        </IconButton>
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

