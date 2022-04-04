import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { Item } from 'Themes/utilityThemes';

const LeftDetails = styled(motion.div).attrs({})`
  grid-area: left;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  min-height: fit-content;
  padding: 110px var(--spacing-15);
`;

const RightDetails = styled(motion.div).attrs({})`
  grid-area: right;

  display: flex;
  flex-direction: column;
  min-height: fit-content;
  padding: 110px var(--spacing-15);
`;

const PrimaryDetails = styled(motion.div).attrs({})``;

const SalesInfo = styled(motion.div).attrs({})``;

const PurchaseInfo = styled(motion.div).attrs({})``;

const Summary = styled(motion.div).attrs({})`
  grid-area: down;
`;

const StocksContainer = styled(motion.div).attrs({})``;

const ImageContainer = styled(motion.div).attrs({})``;

const StockSummary = styled(motion.div).attrs({})``;

const Content = styled(motion.div).attrs({})`
  display: flex;
  align-items: center;
  gap: 10em;
`;

const Wrapper = styled(motion.div).attrs({})`
  padding: var(--spacing-15) 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-5);
`;

const Overview = () => {
  return (
    <>
      <LeftDetails>
        <PrimaryDetails>
          <Item fontSize="16px" fontWeight="500">
            primary Details
          </Item>
          <Wrapper>
            <Content>
              <Item color="#777777" fontSize="12px" fontWeight="400">
                Product Name
              </Item>
              <Item fontSize="12px" fontWeight="500">
                Fashion
              </Item>
            </Content>
            <Content>
              <Item color="#777777" fontSize="12px" fontWeight="400">
                Color
              </Item>
              <Item fontSize="12px" fontWeight="500">
                red
              </Item>
            </Content>
            <Content>
              <Item color="#777777" fontSize="12px" fontWeight="400">
                SKU
              </Item>
              <Item fontSize="12px" fontWeight="500">
                RS-002
              </Item>
            </Content>
            <Content>
              <Item color="#777777" fontSize="12px" fontWeight="400">
                Unit
              </Item>
              <Item fontSize="12px" fontWeight="500">
                Box
              </Item>
            </Content>
            <Content>
              <Item color="#777777" fontSize="12px" fontWeight="400">
                Dimensions
              </Item>
              <Item fontSize="12px" fontWeight="500">
                10 &#215; 10 &#215; 10 cm
              </Item>
            </Content>
            <Content>
              <Item color="#777777" fontSize="12px" fontWeight="400">
                Weight
              </Item>
              <Item fontSize="12px" fontWeight="500">
                45 kg
              </Item>
            </Content>
            <Content>
              <Item color="#777777" fontSize="12px" fontWeight="400">
                Brand
              </Item>
              <Item fontSize="12px" fontWeight="500">
                Dell
              </Item>
            </Content>
            <Content>
              <Item color="#777777" fontSize="12px" fontWeight="400">
                Inventory Account
              </Item>
              <Item fontSize="12px" fontWeight="500">
                Inventory Account
              </Item>
            </Content>
          </Wrapper>
        </PrimaryDetails>
        <PurchaseInfo>
          <Item fontSize="16px" fontWeight="500">
            Sales Information
          </Item>
          <Wrapper>
            <Content>
              <Item color="#777777" fontSize="12px" fontWeight="400">
                Selling Price
              </Item>
              <Item fontSize="12px" fontWeight="500">
                NPR 100
              </Item>
            </Content>
            <Content>
              <Item color="#777777" fontSize="12px" fontWeight="400">
                Sales Account
              </Item>
              <Item fontSize="12px" fontWeight="500">
                Cost of Goods Sold
              </Item>
            </Content>
            <Content>
              <Item color="#777777" fontSize="12px" fontWeight="400">
                Description
              </Item>
              <Item fontSize="12px" fontWeight="500">
                This is Description
              </Item>
            </Content>
          </Wrapper>
        </PurchaseInfo>
        <SalesInfo>
          <Item fontSize="16px" fontWeight="500">
            Purchase Information
          </Item>
          <Wrapper>
            <Content>
              <Item color="#777777" fontSize="12px" fontWeight="400">
                Cost Price
              </Item>
              <Item fontSize="12px" fontWeight="500">
                NPR 100
              </Item>
            </Content>
            <Content>
              <Item color="#777777" fontSize="12px" fontWeight="400">
                Purchase Account
              </Item>
              <Item fontSize="12px" fontWeight="500">
                Cost of Goods Sold
              </Item>
            </Content>
            <Content>
              <Item color="#777777" fontSize="12px" fontWeight="400">
                Preferred Vendor
              </Item>
              <Item
                color="var(--color-secondary)"
                fontSize="12px"
                fontWeight="500">
                zyx company
              </Item>
            </Content>
          </Wrapper>
        </SalesInfo>
      </LeftDetails>
      <RightDetails>
        <ImageContainer>
          <p>image</p>
        </ImageContainer>
        <StockSummary>
          <p>stock summary</p>
        </StockSummary>
      </RightDetails>
      <Summary>
        <p>summary</p>
      </Summary>
    </>
  );
};

export default Overview;

