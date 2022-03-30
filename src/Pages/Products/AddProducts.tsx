import PageTips from 'Components/shared/PageTips';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Icon as Icons, Title } from 'Themes/utilityThemes';

import Icon from 'Assets/Icons/Icon';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import usePost from 'Hooks/usePost';
import { useLocation } from 'react-router';
import { ICategories, IProductsDetails } from 'Interfaces/Interfaces';
import { QuickCreate } from 'Components/main/Navbar/QuickCreate/Elements.QuickCreate';
import ProductsForm from './ProductsForm';

const Form = styled.form`
  height: 100vh;
`;

const Grid = styled(motion.div).attrs({})`
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer';
  grid-template-rows: 45px auto 55px;
  grid-template-columns: 100%;
  height: 100vh;
  background-color: #fbfafa;
`;

const Header = styled(motion.div).attrs({})`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.07);
  padding: 0 var(--spacing-15);

  .rightSection {
    display: flex;
    align-items: center;
    gap: var(--spacing-10);
  }
`;

const Content = styled(motion.div).attrs({})`
  grid-area: content;
  min-height: 100%;
  width: 70%;
  padding: 15px 15px 70px 15px;
`;

const ContentWrapper = styled(motion.div).attrs({})`
  overflow: scroll;
`;

const Hr = styled.hr`
  height: var(--spacing-18);
  color: rgba(0, 0, 0, 0.3);
`;

const Footer = styled(motion.div).attrs({})`
  position: sticky;
  background-color: #fff;
  bottom: 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-10);
  padding: 0 var(--spacing-15);
  grid-area: footer;
  border-top: 1px solid rgba(0, 0, 0, 0.07);
`;

const AddCategories = () => {
  const location = useLocation();
  // @ts-ignore
  const ids = location && location.state && location.state.catId;
  // @ts-ignore
  const catName = location && location.state && location.state.catName;

  const [data, setData] = React.useState<IProductsDetails>(
    {} as IProductsDetails
  );
  const postData = (post: any) => {
    setData(post);
    console.log('postData', post);
  };

  console.log('sales', data.salesInformation);

  const PData = {
    name: data.name,
    sku: data.sku,
    unit: data.unit,
    description: data.description,
    manufacturer: data.manufacturer,
    brand: data.brand,
    dimensions: data.dimensions,
    dUnit: data.dUnit,
    weight: data.weight,
    wUnit: data.wUnit,
    SalesInformation: [
      {
        sellingPrice: data.sellingPrice,
        account: data.saleAccount,
        description: data.sellDescription,
        tax: data.sellTax
      }
    ],
    PurchaseInformation: [
      {
        costPrice: data.costPrice,
        account: data.costAccount,
        description: data.costDescription,
        tax: data.costTax
      }
    ]
  };

  const { handleSubmit } = usePost(
    `http://localhost:9001/api/categories/${ids}/products`,
    PData,
    '/products'
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Grid>
        <Header>
          <Title>New Product</Title>
          {catName}
          <div className="rightSection">
            <PageTips />
            <Hr />
            <Link to="/details">
              <Icons src={Icon.Close} />
            </Link>
          </div>
        </Header>
        <ContentWrapper>
          <Content>
            <ProductsForm postData={postData} />
          </Content>
        </ContentWrapper>
        <Footer>
          <Button
            color="primary"
            // disabled={!postData.name}
            size="small"
            sx={{
              boxShadow: 'none',
              borderRadius: '6px',
              backgroundColor: 'var(--color-secondary)',
              '&:hover': {
                boxShadow: 'none'
              }
            }}
            type="submit"
            variant="contained">
            Save
          </Button>
          <Button
            color="primary"
            size="small"
            sx={{
              boxShadow: 'none',
              borderRadius: '6px',
              background: '#f5f5f5',
              border: '1px solid #e0e0e0',
              color: 'var(--color-primary-dark)',
              '&:hover': {
                boxShadow: 'none'
              }
            }}
            variant="contained">
            Cancel
          </Button>
        </Footer>
      </Grid>
    </Form>
  );
};

export default AddCategories;
