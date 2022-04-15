import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  MenuOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { AutoComplete, Button, Descriptions, Divider, Dropdown, Menu, PageHeader } from 'antd';
import { useLocation, useNavigate } from 'react-router';
import Header from 'Components/shared/ItemsHeader';
import ProductsData from 'Components/shared/ ProductsData';
import { ToggleContext } from 'Hooks/useToggle';
import PageTips from 'Components/shared/PageTips';

const Grid = styled(motion.div)<{ toggle: boolean }>`
  display: grid;

  grid-template-areas:
    'navbar navbar'
    'main product '
    'main product';
  grid-template-rows: 45px auto;
  grid-template-columns: auto ${({ toggle }) => (toggle ? 'auto' : '0')};
  height: 100vh;
`;

const Nav = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: 'easeIn' }
})`
  display: grid;
  align-items: center;
  grid-area: navbar;
  /* box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.03); */
  border: 1px solid rgba(0, 0, 0, 0.03);
`;

const Main = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: 'easeIn' }

})`
  position: relative;
  grid-area: main;
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-15);
  border-right: 1px solid rgba(0, 0, 0, 0.04);
`;

const Product = styled(motion.div).attrs({
  initial: { x: 300, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 300, opacity: 0 },
  transition: { duration: 0.3 }
})`
  overflow: scroll;
  grid-area: product;
`;

type IProps = {
  children: React.ReactNode;
}

const Items: React.FC<IProps> = ({ children }) => {
  const { value, toggleHandle } = React.useContext(ToggleContext);

  const navigate = useNavigate();

  const location = useLocation();
  console.log('location===', location && location.state);

  const id = sessionStorage.getItem('saveId')

  return (
    <>
      <Grid toggle={value}>
        <Nav>
          <PageHeader
            ghost={false}
            onBack={() => window.history.back()}
            title="Categories"
            style={{
              padding: '15px',
            }}
            extra={[
              <Button
                size='small'
                type='primary'
                onClick={() => navigate(`${id ? '' : '/category/add'}`, { state: { cate: location.pathname } })}
                style={{
                  borderRadius: '5px',
                  marginLeft: '3px',
                }}
                key="3">
                <PlusOutlined />
                <span
                  style={{
                    marginLeft: '3px',
                  }}>

                  New
                </span>
              </Button>,
              <Button
                size='small'
                style={{
                  borderRadius: '5px',
                  backgroundColor: '#f6f6f6',
                }}

                key="2">
                <MenuOutlined />
              </Button>, ,
              <Divider
                type="vertical"
                style={{
                  height: "20px",
                  margin: "0px 5px",
                  borderLeft: "2px solid rgba(0, 0, 0, 0.1)",
                }}
                key="4" />,
              <PageTips key='5' />
            ]}
          >
          </PageHeader>
        </Nav>
        <Main>
          {/* <Categories toggleHandle={toggleHandle} /> */}
          {children}
        </Main>
        {value ? (
          <Product>
            <ProductsData toggle={toggleHandle} />
          </Product>
        ) : null}
      </Grid>
    </>
  );
};

export default Items;



