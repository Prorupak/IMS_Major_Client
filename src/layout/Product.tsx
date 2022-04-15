import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router';
import Header from 'Components/shared/ItemsHeader';
import ProductsData from 'Components/shared/ ProductsData';
import {
  MenuOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { ToggleContext } from 'Hooks/useToggle';
import ProductsDetails from 'Pages/Products/ProductsDetails';
import { AutoComplete, Button, Descriptions, Divider, Dropdown, Menu, PageHeader } from 'antd';
import { renderItem, renderTitle } from 'utitls/Antd';
import Title from 'antd/lib/typography/Title';
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
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 }
})`
position: relative;
z-index: 999;
  display: grid;
  align-items: center;
  grid-area: navbar;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.03);
  /* border: 1px solid rgba(0, 0, 0, 0.03); */
  background-color: #fff;
`;

const Main = styled(motion.div).attrs({
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 }
})`
  position: relative;
  grid-area: main;
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-15);
  padding-top: 25px;
  border-right: 1px solid rgba(0, 0, 0, 0.04);
`;

const Products = styled(motion.div).attrs({
  // initial: { x: 300, opacity: 0 },
  // animate: { x: 0, opacity: 1 },
  // exit: { x: 300, opacity: 0 },
  // transition: { duration: 0.3 }
})`
  overflow: scroll;
  grid-area: product;
`;

interface IProps {
  children: React.ReactNode;
}

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://www.aliyun.com">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const salesOptions = [
  {
    label: renderTitle('Income'),
    options: [renderItem('Discount'), renderItem('General Income'), renderItem('Late Fee Income'), renderItem('Interest Income'), renderItem('Other Charges'), renderItem('Sales'), renderItem('Shipping Charges')],
  },
];

type IChid = {
  children: React.ReactNode;
}

const Product: React.FC<IChid> = ({ children }) => {
  const { value, toggleHandle } = React.useContext(ToggleContext);
  // const { value, toggleHandle } = useToggle('itemToggle', false);

  const location = useLocation();
  console.log('location===', location && location.state);

  return (
    <>
      <Grid toggle={value}>
        <Nav>
          <PageHeader
            ghost={false}
            onBack={() => window.history.back()}
            title="Products"
            style={{
              padding: '8px 15px',
              borderBottom: '1px solid rgba(0, 0, 0, 0.09)',
            }}
            extra={[
              <Button
                size='small'
                type='primary'
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
        <Main>{children}</Main>
        {value ? (
          <Products>
            <ProductsDetails />
          </Products>
        ) : null}
      </Grid>
    </>
  );
};

export default Product;








