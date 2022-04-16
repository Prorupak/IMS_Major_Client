import { motion } from 'framer-motion';
import { ToggleContext } from 'Hooks/useToggle';
import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import CompHeader from './Components/productDetails/CompHeader';
import Overview from './Components/Overview';
import History from './Components/History';
import Transactions from './Components/Transactions';
import { ProductData } from 'context/ProductContext';
import { Button, Descriptions, Menu as MenuAntd, PageHeader } from 'antd';

import { Drawer, Skeleton, Space, Spin } from 'antd';

const Grid = styled(motion.div).attrs({})`
overflow: hidden;
position: relative;
  display: grid;
  width: 100%;
 /* padding-top: 20px; */
  grid-template-areas:
    'navbar'
    'body ';
  grid-template-rows:  auto;
  grid-template-columns: auto;
  .spin {
    position: absolute;
    top: 50%;
    left: 50%;
  }
  
`;
const Body = styled(motion.div).attrs({
  // initial: { opacity: 0 },
  // animate: { opacity: 1 },
  // exit: { opacity: 0 },
  // transition: { duration: 0.5, ease: 'easeIn' }
})`
  grid-area: body;
  display: flex;
  justify-content: space-between;
`;

const Header = styled(motion.nav).attrs({})`
  position: fixed;
  grid-area: navbar;
  display: flex;
  flex-direction: column;
  padding-top: 5px;
  background: #fff;
  z-index: 1;
  width: 48%;
`;

const StyledMenuAntd = styled(MenuAntd)`
  && {
    .ant-menu-horizontal {
      padding: var(--spacing-5) var(--spacing-10);
      font-size: var(--font-size-14);
      background-color: red;
    }
  }
  position: relative;
  left: -10px;
  bottom: -3px;
`;

const ProductsDetails = () => {
  const [current, setCurrent] = React.useState('overview');

  const location = useLocation();

  const navigate = useNavigate();

  const { product, loading } = React.useContext(ProductData);

  console.log('ids==>', product);

  const handleClicked = (event: any) => {
    console.log('click', event);
    setCurrent(event.key);
  };
  console.log('current', current);
  const { toggleHandle } = React.useContext(ToggleContext);

  const tabs = ({ currents }: any) => {
    switch (currents) {
      case 'overview':
        return <Overview row={product} />;
      case 'transaction':
        return <Transactions />;
      case 'history':
        return <History />;
      default:
        return <Overview />;
    }
  };

  return (

    <Grid>
      {
        loading ? (
          <div className='spin'>
            <p>
              <Spin />
            </p>
          </div>
        ) : (
          <>
            <Header>
              <PageHeader
                className="site-page-header-responsive"
                onBack={() => window.history.back()}
                style={{
                  padding: '10px',
                  textTransform: "capitalize"
                }}
                  title={product.name}
                avatar={{
                  src: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
                  alt: 'avatar',
                }}
                extra={[
                  <Button
                    onClick={
                      () => {
                        navigate(`/product/${product.id}`, { state: { lol: location.pathname } })
                      }
                    }
                      size="small"
                      style={{
                        borderRadius: "5px"
                      }}
                      key="2">Edit</Button>,
                    <Button
                      size="small"
                      style={{
                        borderRadius: "5px"
                      }}
                      key="1" type="primary">
                      Adjust Stock
                    </Button>,
                  ]}
                  footer={
                    <StyledMenuAntd
                      mode="horizontal"
                      onClick={handleClicked}
                      selectedKeys={[current]}
                      style={{
                        fontSize: '13px',
                        lineHeight: '20px'
                      }}>
                      <MenuAntd.Item key="overview" style={{ padding: '10px' }}>
                        Overview
                      </MenuAntd.Item>
                      <MenuAntd.Item key="transaction" style={{ padding: '10px' }}>
                        Transactions
                      </MenuAntd.Item>
                      <MenuAntd.Item key="history" style={{ padding: '10px' }}>
                        History
                      </MenuAntd.Item>
                    </StyledMenuAntd>
                }
                >
                  <Descriptions.Item label="Created">{product.sku}</Descriptions.Item>
                  <Descriptions.Item label="Created">{"-"}</Descriptions.Item>
                  <Descriptions.Item label="Created">{product.name}</Descriptions.Item>
                </PageHeader>
      </Header>
      <Body>
                {
                  (current === 'overview' ||
          current === 'transaction' ||
          current === 'history') && <>{tabs({ currents: current })}</>}
      </Body>
          </>
        )}

    </Grid>
  );
};

export default ProductsDetails;
















