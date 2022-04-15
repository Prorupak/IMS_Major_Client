import PageTips from 'Components/shared/PageTips';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Icon as Icons, Title } from 'Themes/utilityThemes';
import { Button as MuiButton } from '@mui/material';
import Icon from 'Assets/Icons/Icon';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router';
import { IProductsDetails } from 'Interfaces/Interfaces';

import { ReactHookForm } from 'context/ReactHookForms';
import { useSnackbar } from 'notistack';
import { Button, notification, PageHeader, Spin } from 'antd';
import { ProductData } from 'context/ProductContext';
import useFetch from 'Hooks/useFetch';

const Form = styled.form`
position: relative;
  height: 100vh;
  .spin {
    position: absolute;
    top: 50%;
    left: 50%;
  }
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
  const [loading, setLoading] = React.useState(false);
  const location = useLocation();
  const { handleSubmit, reset, setFocus, formState: { isSubmitSuccessful }, watch } = React.useContext(ReactHookForm);

  console.log('watchhh', watch('salesTax'));

  const ProID = localStorage.getItem('saveId');

  // @ts-ignore
  const pathName = location.state?.lol;

  console.log('pathName===>', pathName);

  const [product, setProduct] = React.useState<any>({});

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:9001/api/products/` + ProID);

      console.log("salesAccount==>", res.data.PurchaseInformation);

      if (pathName === '/products') {
        const initialValues = {
          name: res.data.name,
          description: res.data.description,
          sku: res.data.sku,
          unit: res.data.unit,
          returnable: res.data.returnable,
          length: res.data.dimensions[0].length,
          breadth: res.data.dimensions[0]?.breadth,
          height: res.data.dimensions[0]?.height,
          dUnit: res.data.dimensions[0]?.dUnit,
          weight: res.data.weight[0]?.amount,
          wUnit: res.data.weight[0]?.wUnit,
          manufacturer: res.data.manufacturer,
          brand: res.data.brand,
          sellingPrice: res.data.SalesInformation[0]?.sellingPrice,
          sellAccount: res.data.SalesInformation[0]?.account,
          sellDescription: res.data.SalesInformation[0]?.description,
          sellTax: res.data.SalesInformation[0]?.tax,
          costPrice: res.data.PurchaseInformation[0]?.costPrice,
          costAccount: res.data.PurchaseInformation[0]?.account,
          costDescription: res.data.PurchaseInformation[0]?.description,
          costTax: res.data.PurchaseInformation[0]?.tax,
          inventoryAccount: res.data.inventoryTracking[0]?.inventoryAccount,
          openingStock: res.data.inventoryTracking[0]?.openingStock,
          reorderPoint: res.data.inventoryTracking[0]?.reorderPoint,
          openingStockRate: res.data.inventoryTracking[0]?.openingStockRate,
          preferredVendor: res.data.inventoryTracking[0]?.preferredVendor,

        }
        reset(initialValues);
      }
      else {
        reset();
      }

      setLoading(false);

    } catch (e: any) {
      console.log('error', e);
    }
  }

  React.useEffect(() => { }, []);

  useEffect(() => {
    fetchData();
  }, [reset]);


  const navigate = useNavigate();


  const close = () => {
    // navigate('/products')
  };

  const onNavigate = (res: any) => {
    navigate('/products', { state: res })
  }

  const openNotification = (res: any, error?: any) => {
    console.log('productNae', res)
    if (error) {
      notification.error({
        message: 'Error',
        description: res,
        placement: 'bottomRight',
        duration: 2,
      });
    } else {
      const key = `open${Date.now()}`;
      const btn = (
        <div style={{ display: "flex", alignItems: 'center', gap: '5px' }}>
        <Button type="primary" size="small" onClick={onNavigate}>
          View Details
        </Button>
          <Button type="primary" size="small">
            Add More
          </Button>
        </div>
      );
      notification.open({
        type: 'success',
        message: res ? res.data.name + ' added successfully' : error,
        description:
          `If you wish to view details about ${res.data.name} , tap on 'View Details'`,
        btn,
        key,
        duration: 5,
        onClose: close,
      });
    }
  }



  const { enqueueSnackbar } = useSnackbar();
  const [error, setError] = React.useState<string>('');


  const onSubmit = (data: any) => {
    console.log('data===>', data.sellDescription);
    const PData = {
      name: data.name,
      sku: data.sku,
      unit: data.unit,
      description: data.description,
      manufacturer: data.manufacturer,
      brand: data.brand,
      weight: [{
        amount: data.weight,
        wUnit: data.wUnit
      }],
      dimensions: [
        {
          length: data.length,
          breadth: data.breadth,
          height: data.height,
          dUnit: data.dUnit,
        }
      ],
      SalesInformation: [
        {
          sellingPrice: data.sellingPrice,
          account: data.sellAccount,
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
        openingStockRate: data.openingStockRate,
        preferredVendor: data.preferredVendor
      }]
    };
    console.log('PData', PData);


    const postData = async () => {
      try {
        if (pathName === '/products') {
          const res = await axios.put(`http://localhost:9001/api/products/${id}`, PData);
          console.log('updateRes', res);
          if (res.status === 200) {
            const productName = res.data.name
            console.log('resdata', res.data.name);
            openNotification(res);
          }
        } else {
          const res = await axios.post(`http://localhost:9001/api/categories/${id}/products`, PData);
          console.log('res', res);
          if (res.status === 200) {
            const productName = res.data.name
            console.log('resdata', res.data.name);
            openNotification(res);
          }

        }

      } catch (error) {
        console.log('error', error);
        openNotification(null, error);
      }
    }

    return postData();

  }



  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>

        {
          loading ? (
            <div className='spin'>
              <p>
                <Spin />
              </p>
            </div>
          ) : (
              <Grid>
                <Header>
                  <PageHeader
                    className="site-page-header"
                    onBack={
                      () => {
                        navigate('/products')
                      }
                    }
                    title={pathName === '/products' ? 'Edit Product' : 'Add Product'}

                    style={{
                      padding: 0,
                    }}
                  />
                </Header>
                <ContentWrapper>
                  <Content>
                    {children}
                    {/* <ProductsForm postData={postData} /> */}
                  </Content>
                </ContentWrapper>
                <Footer>
                  <MuiButton
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
                      pathName === '/products' ? 'Update' : 'Add'
                    }
                  </MuiButton>
                  <Link to="/products">
                    <MuiButton
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
                    </MuiButton>
                  </Link>
                </Footer>
              </Grid>
          )
        }
      </Form>
    </>

  );
};

export default AddProducts;
