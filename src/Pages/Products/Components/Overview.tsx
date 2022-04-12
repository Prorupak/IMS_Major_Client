/* eslint-disable react/jsx-one-expression-per-line */
import { Divider } from 'antd';
import Icon from 'Assets/Icons/Icon';
import Image from 'Assets/Image/Image';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { TooltipMui } from 'Themes/MaterialUI';
import { Button, Item, Icon as Icons } from 'Themes/utilityThemes';
import { Chart } from './productDetails/Chart';

const LeftDetails = styled(motion.div).attrs({})`
  grid-area: left;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  min-height: fit-content;
  padding: 130px var(--spacing-15);
`;

const RightDetails = styled(motion.div).attrs({})`
  grid-area: right;

  display: flex;
  flex-direction: column;
  /* width: 100%; */
  max-width: 500px;

  /* align-items: flex-start; */
  min-height: fit-content;
  padding: 130px var(--spacing-15);
`;

const PrimaryDetails = styled(motion.div).attrs({})``;

const SalesInfo = styled(motion.div).attrs({})`
  /* margin: var(--spacing-30) 0; */
`;

const PurchaseInfo = styled(motion.div).attrs({})`
  margin: var(--spacing-30) 0;
`;

const Summary = styled(motion.div).attrs({})`
  grid-area: down;
`;

const StocksContainer = styled(motion.div).attrs({})``;

const ImageContainer = styled(motion.div).attrs({})`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ImageX = styled.div`
  width: 250px;
  height: 230px;
  border: 1px solid #d6d6d6;
  border-radius: 5px;
  img {
    width: 250px;
    height: 230px;
  }
`;
const ImageXl = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #d6d6d6;
  border-radius: 5px;

  img {
    width: 50px;
    height: 50px;
  }
`;

const ImageAlt = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SmallImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StockSummary = styled(motion.div).attrs({})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: var(--spacing-5) var(--spacing-15);
  margin: var(--spacing-40) 0 0 0;
  background-color: #f5f5f5;
`;

const Content = styled(motion.div).attrs({})<{ gap?: string }>`
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap || '0px'};
`;

const StkGroup = styled(motion.div).attrs({})`
  display: flex;
  align-items: center;
  width: 60%;
  padding: var(--spacing-15) 0 0 0;
`;

const ShippInfo = styled(motion.div).attrs({})`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  width: 90%;
`;

const ShippInfoItem = styled(motion.div).attrs({})`
  text-align: center;
`;

const ShippInfoContainer = styled(motion.div).attrs({})`
  padding: var(--spacing-20);
  background-color: #fff;
  border-radius: 7px;
  text-align: center;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled(motion.div).attrs({})`
  padding: var(--spacing-15) 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-5);
`;

const Overview = ({ row }: any) => {
  console.log('row', row?.PurchaseInformation?.map((item: any) => item.costPrice));
  return (
    <>
      <LeftDetails>
        <PrimaryDetails>
          <Item fontSize="16px" fontWeight="500">
            primary Details
          </Item>
          <Wrapper>
            <Content gap="10px">
              <Item color="#777777" fontSize="12px" fontWeight="400">
                Product Name
              </Item>
              <Item fontSize="12px" fontWeight="500">
                {row.name}
              </Item>
            </Content>
            <Content gap="10px">
              <Item color="#777777" fontSize="12px" fontWeight="400">
                Color
              </Item>
              <Item fontSize="12px" fontWeight="500">
                red
              </Item>
            </Content>
            <Content gap="10px">
              <Item color="#777777" fontSize="12px" fontWeight="400">
                SKU
              </Item>
              <Item fontSize="12px" fontWeight="500">
                {row.sku}
              </Item>
            </Content>
            <Content gap="10px">
              <Item color="#777777" fontSize="12px" fontWeight="400">
                Unit
              </Item>
              <Item fontSize="12px" fontWeight="500">
                {row.unit}
              </Item>
            </Content>
            <Content gap="10px">
              <Item color="#777777" fontSize="12px" fontWeight="400">
                Dimensions
              </Item>
              <Item fontSize="12px" fontWeight="500">
                {
                  row.dimensions.map((item: any, index: number) => {
                    return (
                      <span key={index}>
                        {item.length} &#215; {item.breadth} &#215; {item.height} {item.dUnit}

                      </span>
                    )
                  })
                }
              </Item>
            </Content>
            <Content gap="10px">
              <Item color="#777777" fontSize="12px" fontWeight="400">
                Weight
              </Item>
              <Item fontSize="12px" fontWeight="500">
                {
                  row.weight.map((item: any, index: number) => {
                    return (
                      <span key={index}>
                        {item.amount} {item.wUnit}
                      </span>
                    )
                  }
                  )
                }
              </Item>
            </Content>
            <Content gap="10px">
              <Item color="#777777" fontSize="12px" fontWeight="400">
                Brand
              </Item>
              <Item fontSize="12px" fontWeight="500">
                {row.brand}
              </Item>
            </Content>
            <Content gap="10px">
              <Item color="#777777" fontSize="12px" fontWeight="400">
                Inventory Account
              </Item>
              <Item fontSize="12px" fontWeight="500">
                {row.inventoryTracking[0]?.inventoryAccount}
              </Item>
            </Content>
          </Wrapper>
        </PrimaryDetails>
        <PurchaseInfo>
          <Item fontSize="16px" fontWeight="500">
            Sales Information
          </Item>
          <Wrapper>
            <Content gap="10px">
              <Item color="#777777" fontSize="12px" fontWeight="400">
                Selling Price
              </Item>
              <Item fontSize="12px" fontWeight="500">
                NPR {row?.SalesInformation[0]?.sellingPrice}
              </Item>
            </Content>
            <Content gap="10px">
              <Item color="#777777" fontSize="12px" fontWeight="400">
                Sales Account
              </Item>
              <Item fontSize="12px" fontWeight="500">
                Cost of Goods Sold
              </Item>
            </Content>
            <Content gap="10px">
              <Item color="#777777" fontSize="12px" fontWeight="400">
                Description
              </Item>
              <Item fontSize="12px" fontWeight="500">
                {row?.SalesInformation[0]?.description}
              </Item>
            </Content>
          </Wrapper>
        </PurchaseInfo>
        <SalesInfo>
          <Item fontSize="16px" fontWeight="500">
            Purchase Information
          </Item>
          <Wrapper>
            <Content gap="10px">
              <Item color="#777777" fontSize="12px" fontWeight="400">
                Cost Price
              </Item>
              <Item fontSize="12px" fontWeight="500">
                NPR {row?.PurchaseInformation[0]?.costPrice}
              </Item>
            </Content>
            <Content gap="10px">
              <Item color="#777777" fontSize="12px" fontWeight="400">
                Purchase Account
              </Item>
              <Item fontSize="12px" fontWeight="500">
                Cost of Goods Sold
              </Item>
            </Content>
            <Content gap="10px">
              <Item color="#777777" fontSize="12px" fontWeight="400">
                Preferred Vendor
              </Item>
              <Item
                color="var(--color-secondary)"
                fontSize="12px"
                fontWeight="500">
                {row.inventoryTracking[0]?.preferredVendor}
              </Item>
            </Content>
          </Wrapper>
        </SalesInfo>
      </LeftDetails>
      <RightDetails>
        <ImageContainer>
          <ImageAlt>
            <Item fontSize="11px" fontWeight="500">
              <p
                style={{
                  padding: '5px',
                  borderRadius: '5px',
                  backgroundColor: '#e3edf7',
                  width: '55px',
                  textAlign: 'center'
                }}>
                Primary
              </p>
            </Item>
            <Icons src={Icon.Close} />
          </ImageAlt>
          <ImageX>
            <img alt="" src={Image.Product} />
          </ImageX>
          <SmallImageContainer>
            <ImageXl>
              <img alt="" src={Image.Product} />
            </ImageXl>
            <ImageXl>
              <img alt="" src={Image.Product} />
            </ImageXl>
            <ImageXl>
              <img alt="" src={Image.Product} />
            </ImageXl>
            <Button
              style={{
                padding: '15px'
              }}>
              <Icons
                src={Icon.BPlus}
                style={{
                  fill: '#000',
                  width: '20px',
                  height: '20px'
                }}
              />
            </Button>
          </SmallImageContainer>
        </ImageContainer>
        <StockSummary>
          <StkGroup
            style={{
              marginBottom: '10px'
            }}>
            <TooltipMui title="The stock available for sale at the beginning of the accounting period.">
              <Item
                fontSize="12px"
                fontWeight="bold"
                height="50%"
                style={{
                  borderBottom: '1px dashed #969696',
                  paddingBottom: '2px'
                }}
                width="100%">
                Opening Stock
              </Item>
            </TooltipMui>
            <Item fontWeight="bold" height="40%" style={{ margin: '0 30px' }}>
              : {row.inventoryTracking[0]?.openingStock}.00
            </Item>
          </StkGroup>
          <Item fontSize="16px" fontWeight="medium">
            Accounting Stock
            <TooltipMui title="This is calculated based on Bills and Invoices.">
              <Icons src={Icon.Iicn} style={{ marginLeft: '5px' }} />
            </TooltipMui>
          </Item>
          <StkGroup
            style={{
              marginTop: '20px'
            }}>
            <TooltipMui title="Current stock available for this product.">
              <Item
                fontSize="12px"
                fontWeight="medium"
                height="100%"
                margin="-2px 0"
                style={{
                  borderBottom: '1px dashed #969696',
                  paddingBottom: '2px'
                }}
                width="100%">
                Stock on Hand
              </Item>
            </TooltipMui>
            <Item
              fontWeight="medium"
              height="40%"
              margin="-2px 0"
              style={{ margin: '0 30px' }}>
              : {row.inventoryTracking[0]?.openingStock}.00
            </Item>
          </StkGroup>
          <StkGroup>
            <TooltipMui title="Stock that is committed to sales order(s) but not yet shipped">
              <Item
                fontSize="12px"
                fontWeight="medium"
                height="100%"
                margin="-2px 0"
                style={{
                  borderBottom: '1px dashed #969696',
                  paddingBottom: '2px'
                }}
                width="100%">
                Committed Stock
              </Item>
            </TooltipMui>
            <Item
              fontWeight="medium"
              height="40%"
              margin="-2px 0"
              style={{ margin: '0 30px' }}>
              : 0.00
            </Item>
          </StkGroup>
          <StkGroup
            style={{
              marginBottom: '10px'
            }}>
            <TooltipMui title="Available for Sale = Stock on Hand - Committed Stock">
              <Item
                fontSize="12px"
                fontWeight="medium"
                height="100%"
                margin="-2px 0"
                style={{
                  borderBottom: '1px dashed #969696',
                  paddingBottom: '2px'
                }}
                width="100%">
                Available Stock
              </Item>
            </TooltipMui>
            <Item
              fontWeight="medium"
              height="40%"
              margin="-2px 0"
              style={{ margin: '0 30px' }}>
              : 20.00
            </Item>
          </StkGroup>
          <Item fontSize="16px" fontWeight="medium">
            Physical Stock
            <TooltipMui title="This is calculated based on Bills and Invoices.">
              <Icons src={Icon.Iicn} style={{ marginLeft: '5px' }} />
            </TooltipMui>
          </Item>
          <StkGroup
            style={{
              marginTop: '20px'
            }}>
            <TooltipMui title="Current stock available for this product.">
              <Item
                fontSize="12px"
                fontWeight="medium"
                height="100%"
                margin="-2px 0"
                style={{
                  borderBottom: '1px dashed #969696',
                  paddingBottom: '2px'
                }}
                width="100%">
                Stock on Hand
              </Item>
            </TooltipMui>
            <Item
              fontWeight="medium"
              height="40%"
              margin="-2px 0"
              style={{ margin: '0 30px' }}>
              : {row.inventoryTracking[0]?.openingStock}.00
            </Item>
          </StkGroup>
          <StkGroup>
            <TooltipMui title="Stock that is committed to sales order(s) but not yet shipped">
              <Item
                fontSize="12px"
                fontWeight="medium"
                height="100%"
                margin="-2px 0"
                style={{
                  borderBottom: '1px dashed #969696',
                  paddingBottom: '2px'
                }}
                width="100%">
                Committed Stock
              </Item>
            </TooltipMui>
            <Item
              fontWeight="medium"
              height="40%"
              margin="-2px 0"
              style={{ margin: '0 30px' }}>
              : 0.00
            </Item>
          </StkGroup>
          <StkGroup>
            <TooltipMui title="Available for Sale = Stock on Hand - Committed Stock">
              <Item
                fontSize="12px"
                fontWeight="medium"
                height="100%"
                margin="-2px 0"
                style={{
                  borderBottom: '1px dashed #969696',
                  paddingBottom: '2px'
                }}
                width="100%">
                Available Stock
              </Item>
            </TooltipMui>
            <Item
              fontWeight="medium"
              height="40%"
              margin="-2px 0"
              style={{ margin: '0 30px' }}>
              {/* : {row.inventoryTracking[0]?.openingStock}.00 */}
            </Item>
          </StkGroup>
          <Divider />
          <ShippInfo>
            <ShippInfoContainer>
              <ShippInfoItem>
                <Item fontSize="16px" fontWeight="medium">
                  0
                </Item>{' '}
                <Item fontSize="10px" fontWeight="medium">
                  Qty
                </Item>
              </ShippInfoItem>
              <Item fontSize="10px" fontWeight="medium">
                To be shipped
              </Item>
            </ShippInfoContainer>
            <ShippInfoContainer>
              <ShippInfoItem>
                <Item fontSize="16px" fontWeight="medium">
                  0
                </Item>{' '}
                <Item fontSize="10px" fontWeight="medium">
                  Qty
                </Item>
              </ShippInfoItem>
              <Item fontSize="10px" fontWeight="medium">
                To be Received
              </Item>
            </ShippInfoContainer>
            <ShippInfoContainer>
              <ShippInfoItem>
                <Item fontSize="16px" fontWeight="medium">
                  0
                </Item>{' '}
                <Item fontSize="10px" fontWeight="medium">
                  Qty
                </Item>
              </ShippInfoItem>
              <Item fontSize="10px" fontWeight="medium">
                To be Invoiced
              </Item>
            </ShippInfoContainer>
            <ShippInfoContainer>
              <ShippInfoItem>
                <Item fontSize="16px" fontWeight="medium">
                  0
                </Item>{' '}
                <Item fontSize="10px" fontWeight="medium">
                  Qty
                </Item>
              </ShippInfoItem>
              <Item fontSize="10px" fontWeight="medium">
                To be Billed
              </Item>
            </ShippInfoContainer>
          </ShippInfo>
          <Divider />
          <StkGroup
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}>
            <TooltipMui title="Stock that is committed to sales order(s) but not yet shipped">
              <Item
                fontSize="12px"
                fontWeight="medium"
                height="50%"
                style={{
                  borderBottom: '1px dashed #969696',
                  paddingBottom: '2px'
                }}
                width="32%">
                Reorder Point
              </Item>
            </TooltipMui>
            <Item
              fontSize="17px"
              fontWeight="bold"
              height="40%"
              margin="-2px 0">
              {row.inventoryTracking[0]?.reorderPoint}
            </Item>
          </StkGroup>
        </StockSummary>
      </RightDetails>
      <Summary>{/* <Chart /> */}</Summary>
    </>
  );
};

export default Overview;










