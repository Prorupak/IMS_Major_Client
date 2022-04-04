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

const Grid = styled(motion.div).attrs({})`
  display: grid;
  grid-template-areas:
    'header header'
    'content content';
  grid-template-rows: auto auto;
  grid-template-columns: 103vh 103vh;
  padding: var(--spacing-15) var(--spacing-15);
  width: 100%;
`;

const Header = styled(motion.nav).attrs({})`
  grid-area: header;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProductsDetails = () => {
  const location = useLocation();
  const [current, setCurrent] = React.useState('overview');
  const handleClicked = (event: any) => {
    console.log('click', event);
    setCurrent(event.key);
  };
  console.log('current', current);
  const { toggleHandle } = React.useContext(ToggleContext);
  const Body = styled(motion.div).attrs({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5, ease: 'easeIn' }
  })`
    grid-area: content;
    display: flex;
    justify-content: space-between;
  `;
  // @ts-ignore
  const ids = location && location.state && location.state.row;

  console.log('row=>>>>', ids);
  // @ts-ignore
  const catName = location && location.state && location.state.catName;

  const tabs = ({ currents }: any) => {
    switch (currents) {
      case 'overview':
        return <Overview />;
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
        <CompHeader current={current} handleClicked={handleClicked} />
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

