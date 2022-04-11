import PageTips from 'Components/shared/PageTips';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Icon as Icons, Title } from 'Themes/utilityThemes';

import Icon from 'Assets/Icons/Icon';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import { IProductsDetails } from 'Interfaces/Interfaces';

import { ReactHookForm } from 'context/ReactHookForms';
import { useSnackbar } from 'notistack';

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

const AddProducts = ({ children }: any) => {
  const { id } = useParams();
  const [data, setData] = React.useState<IProductsDetails>(
    {} as IProductsDetails
  );
  const { handleSubmit } = React.useContext(ReactHookForm)


  const defaultValues = {
    name: "",
    description: "",
    sku: "",
    unit: "",
    select: "",
    autoComplete: "",
    checkbox: false,
  }

  // const { handleSubmit } = useReactHook(defaultValues);
  // const 



  const postData = (post: any) => {
    setData(post);
  };

  // const PData = {
  //   name: data.name,
  //   sku: data.sku,
  //   unit: data.unit,
  //   description: data.description,
  //   manufacturer: data.manufacturer,
  //   brand: data.brand,
  //   dimensions: data.dimensions,
  //   dUnit: data.dUnit,
  //   weight: data.weight,
  //   wUnit: data.wUnit,
  //   SalesInformation: [
  //     {
  //       sellingPrice: data.sellingPrice,
  //       account: data.saleAccount,
  //       description: data.sellDescription,
  //       tax: data.sellTax
  //     }
  //   ],
  //   PurchaseInformation: [
  //     {
  //       costPrice: data.costPrice,
  //       account: data.costAccount,
  //       description: data.costDescription,
  //       tax: data.costTax
  //     }
  //   ],
  //   inventoryTracking: [{
  //     inventoryAccount: data.inventoryAccount,
  //     openingStock: data.openingStock,
  //     reorderPoint: data.reorderPoint,
  //     openingStockRate: data.openingStockPerUnit,
  //     preferredVendor: data.preferredVendor
  //   }]
  // };
  // const UData = {
  //   name: data.name,
  //   sku: data.sku,
  //   unit: data.unit,
  //   description: data.description,
  //   manufacturer: data.manufacturer,
  //   brand: data.brand,
  //   dimensions: data.dimensions,
  //   dUnit: data.dUnit,
  //   weight: data.weight,
  //   wUnit: data.wUnit,
  //   SalesInformation: [
  //     {
  //       sellingPrice: data.sellingPrice,
  //       account: data.saleAccount,
  //       description: data.sellDescription,
  //       tax: data.sellTax
  //     }
  //   ],
  //   PurchaseInformation: [
  //     {
  //       costPrice: data.costPrice,
  //       account: data.costAccount,
  //       description: data.costDescription,
  //       tax: data.costTax
  //     }
  //   ],
  //   inventoryTracking: [{
  //     inventoryAccount: data.inventoryAccount,
  //     openingStock: data.openingStock,
  //     reorderPoint: data.reorderPoint,
  //     openingStockRate: data.openingStockPerUnit,
  //     preferredVendor: data.preferredVendor
  //   }]
  // };

  // console.log('PData', PData.inventoryTracking);

  // const { handleSubmit: onSubmit } = usePost(
  //   `http://localhost:9001/api/categories/${id}/products`,
  //   PData,
  //   '/products'
  // );

  // const { handleSubmit: handlePut } = usePut(
  //   `http://localhost:9001/api/categories/${id}`,
  //   UData,
  //   '/details'
  // );
  const navigate = useNavigate();


  const { enqueueSnackbar } = useSnackbar();
  const [error, setError] = React.useState<string>('');


  const onSubmit = (data: IProductsDetails) => {
    console.log('data', data);
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
      ],
      inventoryTracking: [{
        inventoryAccount: data.inventoryAccount,
        openingStock: data.openingStock,
        reorderPoint: data.reorderPoint,
        openingStockRate: data.openingStockPerUnit,
        preferredVendor: data.preferredVendor
      }]
    };
    console.log('PData', PData);

    const postData = async () => {
      try {
        const res = await axios.post(`http://localhost:9001/api/categories/${id}/products`, PData);
        enqueueSnackbar(res.data.success, {
          variant: 'success'
        });
        navigate('/products');
      } catch (error) {
        console.log('error', error);
        enqueueSnackbar("errors", {
          variant: 'error'
        });
      }
    }

    return postData();

  }

  // const {handleSubmit: onSubmit} = usePost(
  //   `http://localhost:9001/api/categories/${id}/products`,
  //   PData,
  //   '/products'
  // );



  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Grid>
        <Header>
          <Title>New Product</Title>
          <div className="rightSection">
            <PageTips />
            <Hr />
            <Link to="/category/details">
              <Icons src={Icon.Close} />
            </Link>
          </div>
        </Header>
        <ContentWrapper>
          <Content>
            {children}
            {/* <ProductsForm postData={postData} /> */}
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
            {
              'Add'
            }
          </Button>
          <Link to="/products">
          <Button
            color="primary"
              onClick={handleSubmit((e: any) => console.log('e', e))}
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
          </Link>
        </Footer>
      </Grid>
    </Form>
  );
};

export default AddProducts;







