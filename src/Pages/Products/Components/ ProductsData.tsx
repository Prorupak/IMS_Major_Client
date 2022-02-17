/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { getCategories } from '../../../api/api';
import ProductsDetailsHeader from './productDetails/ProductsDetailsHeader';

const Grid = styled.div`
  display: grid;
  grid-template: 500px 100vw / 200 / auto;
`;

const Header = styled.header`
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.04);
`;

const Section = styled.section``;

type IProps = {
  children: React.ReactNode;
};

const ProductsData: React.FC<IProps> = ({ children, ...rest }) => {
  const [data, setData] = React.useState<string[] | any[]>([]);
  const fetchData = async () => {
    try {
      const fetchDatas = await axios.get(
        'https://api.first.org/data/v1/countries'
      );
      setData([fetchDatas]);
      console.log('fetch===>', fetchData);
    } catch (err) {
      console.log('err====>', err);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Grid {...rest}>
        <Header>
          <ProductsDetailsHeader />
          {data}
        </Header>
        <Section>{children}</Section>
      </Grid>
    </>
  );
};

export default ProductsData;
