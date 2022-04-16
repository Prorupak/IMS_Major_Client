import PageTips from 'Components/shared/PageTips';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Icon as Icons, Title } from 'Themes/utilityThemes';

import Icon from 'Assets/Icons/Icon';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Button, notification, PageHeader, Spin } from 'antd';
import { useNavigate } from 'react-router';
import { Button as MuiButton } from '@mui/material';

import axios from 'axios';
import { useLocation } from 'react-router';
import { ReactHookForm } from 'context/ReactHookForms';
import { useParams } from 'react-router';
import { CategoryContext } from 'context/CategoryContext';


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
  bottom: 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-10);
  padding: 0 var(--spacing-15);
  grid-area: footer;
  border-top: 1px solid rgba(0, 0, 0, 0.07);
`;

const AddCategories = ({ children }: any) => {
  const location = useLocation();

  const { categoryDetails } = React.useContext(CategoryContext)
  const { handleSubmit, reset, setFocus, formState: { isSubmitSuccessful }, watch } = React.useContext(ReactHookForm);
  const [loading, setLoading] = React.useState(false);

  console.log('watchhh', watch('salesTax'));

  const ProID = localStorage.getItem('CateID');

  // @ts-ignore
  const pathName = location.state?.cate;


  const { id } = useParams();

  const resetFields = React.useCallback(() => {
    console.log('reset');
    reset();
    setFocus();
  }, []);




  const navigate = useNavigate();


  const close = () => {
    // navigate('/products')
  };

  const onNavigate = (res: any) => {
    navigate('/details', { state: res })
  }

  const openNotification = (res: any, error?: any, description?: string) => {
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
          <Button type="primary" size="small"
            onClick={resetFields}
          >
            Add More
          </Button>
        </div>
      );
      notification.open({
        type: 'success',
        message: res ? res.data.map((item: any) => item.name) + ' added successfully' : error,
        description: id ? '' : description,
          // `${ !id "If you wish to view details about" res.data.map((item: any) => item.name) ", tap on 'View Details'"},
        btn,
        key,
        duration: 5,
        onClose: close,
      });
    }
  }

  const fetchData = async () => {
    try {
      setLoading(false);
      if (id) {
        const res = await axios.get(`http://localhost:9001/api/categories/${id}`);
        console.log('res===>', res);
        const initialValues = {
          catName: res.data.name,
          catDes: res.data.description,
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

  useEffect(() => {
    fetchData();
  }, [reset]);


  console.log('uesParams', id);

  const onSubmit = (data: any) => {
    console.log('data===>', data.sellDescription);
    const PData = {
      name: data.catName,
      description: data.catDes,
    };
    console.log('PData', PData);


    const postData = async () => {
      try {
        setLoading(true);
        if (id) {
          const res = await axios.put(`http://localhost:9001/api/categories/${id}`, PData);
          console.log('res', res);
          openNotification(res, null, 'if you wish to view details about' + res.data.map((item: any) => item.name) + ', tap on "View Details"');
        }
        else {
          console.log('postData', PData);
          const res = await axios.post('http://localhost:9001/api/categories', PData);
          console.log('resdata', res);
          setLoading(false);
          if (res.status === 200 || res.status === 201 || res.status === 202) {
            const productName = res.data.name

            openNotification(res, null);
          }
        }
      } catch (error) {
        console.log('error', error);
        setLoading(false);
        openNotification(null, error);
      }
    }

    return postData();

  }

  return (
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
                      navigate('/details')
                    }
                  }
                  title={pathName === '/details' ? 'Add Categories' : 'Update Category'}

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
                  onClick={() => {
                    localStorage.removeItem('CateID');
                  }}
                  variant="contained">
                  {
                    loading ? (
                      <Spin size='small' />
                    ) : 
                    pathName === '/details' ? 'Add' : 'Update'
                  }
                </MuiButton>
                <Link to="/details">
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
                    onClick={() => {
                      localStorage.removeItem('CateID');
                    }}
                    variant="contained">
                    Cancel
                  </MuiButton>
                </Link>
                <Button onClick={() => {
                  reset();
                }}>reset</Button>
              </Footer>
            </Grid>
        )
      }

    </Form>
  );
};

export default AddCategories;















































