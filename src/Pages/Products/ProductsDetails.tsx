/* eslint-disable operator-linebreak */
import { motion } from 'framer-motion';
import { ToggleContext } from 'Hooks/useToggle';
import React from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import CompHeader from './Components/productDetails/CompHeader';
import Overview from './Components/Overview';
import History from './Components/History';
import Transactions from './Components/Transactions';
import { ProductData } from 'context/ProductContext';

const Grid = styled(motion.div).attrs({})`
overflow: hidden;
  display: grid;
  width: 100%;
`;
const Body = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: 'easeIn' }
})`
  /* padding: var(--spacing-15) var(--spacing-15); */
  grid-area: content;
  display: grid;
  grid-template-areas:
    'left right'
    'down down';
  grid-template-rows: auto auto;
  grid-template-columns: 90vh 70vh;
  /* width: 100%; */
`;

const Header = styled(motion.nav).attrs({})`
  padding: 10px 15px;
  position: fixed;
  grid-area: header;
  display: flex;
  flex-direction: column;
  width: 71.5%;
  background: #fff;
  height: 7em;
  z-index: 1;
  gap: 10px;
`;

const ProductsDetails = () => {
  const [current, setCurrent] = React.useState('overview');
  const [loading, setLoading] = React.useState(true);

  const { product: ids } = React.useContext(ProductData);

  const handleClicked = (event: any) => {
    console.log('click', event);
    setCurrent(event.key);
  };
  console.log('current', current);
  const { toggleHandle } = React.useContext(ToggleContext);



  const tabs = ({ currents }: any) => {
    switch (currents) {
      case 'overview':
        return <Overview row={ids} />;
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
      <Header>
        <CompHeader
          current={current}
          handleClicked={handleClicked}
          info={ids}
        />
      </Header>
      <Body>
        {(current === 'overview' ||
          current === 'transaction' ||
          current === 'history') && <>{tabs({ currents: current })}</>}
      </Body>
    </Grid>
  );
};

export default ProductsDetails;
















