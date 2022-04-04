import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const LeftDetails = styled(motion.div).attrs({})``;

const RightDetails = styled(motion.div).attrs({})``;

const PrimaryDetails = styled(motion.div).attrs({})``;

const SalesInfo = styled(motion.div).attrs({})``;

const Summary = styled(motion.div).attrs({})``;

const ImageContainer = styled(motion.div).attrs({})``;

const StockSummary = styled(motion.div).attrs({})``;
const Overview = () => {
  return (
    <>
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
    </>
  );
};

export default Overview;

