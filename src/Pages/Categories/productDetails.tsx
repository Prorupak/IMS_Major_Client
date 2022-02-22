/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/display-name */
/* eslint-disable react/no-multi-comp */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
// import svg icon form ../../../../Assets/Icons/Close.svg

import React from 'react';
// import Close from '../../../../Assets/Icons/Close.svg';
import { Chip } from '@mui/material';
import { Item, Divider, Heading } from '../../Themes/utilityThemes';
import { DataGrid } from '@mui/x-data-grid';
import Icon from 'Assets/Icons/Icon';
import { motion } from 'framer-motion';
import Image from 'Assets/Image/Image';
import axios from 'axios';
import { useLocation } from 'react-router';
import { IProductsDetails } from 'Interfaces/Interfaces';
import { v4 as uuid } from 'uuid';

import styled from 'styled-components';
import useFetch from 'Hooks/useFetch';
import ProductsContainer from 'Components/shared/ProductsContainer';

interface ChipData {
  key: number;
  label: string;
}

export const Grid = styled.div`
  overflow-x: hidden;
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'body';

  grid-template-rows: auto auto fill-content;

  margin: var(--spacing-15) var(--spacing-15);
`;

const Wrapper = styled.div`
  /* overflow: hidden; */
  display: flex;
  gap: 55px;
  width: 100%;
  /* max-width: 400px; */
  max-width: 500px;
  min-height: fit-content;
`;

const Header = styled.header`
  grid-area: header;
  grid-row: span 1;
  margin: var(--spacing-5) 0;
`;

const Content = styled.section`
  grid-area: content;
`;

const Body = styled.section`
  overflow: scroll;
  grid-area: body;
  margin: var(--spacing-5) 0;
`;

const Headings = styled(motion.div).attrs({})`
  display: flex;
  flex-direction: column;
`;

const Data = styled(motion.div).attrs({})`
  display: flex;
  flex-direction: column;
`;

const ColorWrapper = styled.div`
  /* display: flex; */
`;

const Colors = styled(motion.div).attrs({})`
  overflow: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: proximity;
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  min-height: 0px;
  max-height: 70px;
  min-width: 47rem;
  max-width: 65rem;
`;

const ProductDetails = () => {
  const location = useLocation();
  // @ts-ignore
  const ids = location && location.state && location.state.catId;
  // @ts-ignore
  const catName = location && location.state && location.state.catName;
  // @ts-ignore
  console.log('id===>', ids);
  console.log('name===>', catName);

  // get one element of brandId array at a time

  // const fetch = async () => {
  //   const res = await axios.get(
  //     `http://localhost:9001/api/products/${brandId}/brand`
  //   );
  //   console.log('res====>', res.data);
  // };

  const [chipData, setChipData] = React.useState<readonly ChipData[]>([
    { key: 0, label: 'Red' },
    { key: 1, label: 'Blue' },
    { key: 2, label: 'Cyan' },
    { key: 3, label: 'Cyan' },
    { key: 4, label: 'Cyan' },
    { key: 5, label: 'Cyan' },
    { key: 6, label: 'Cyan' },
    { key: 7, label: 'Cyan' }
  ]);

  const handleDelete = (chipToDelete: ChipData) => {
    return () => {
      setChipData((chips) => {
        return chips.filter((chip) => {
          return chip.key !== chipToDelete.key;
        });
      });
    };
  };

  const [unit, setUnit] = React.useState<any>('');

  const fetch = async () => {
    const res = await axios.get('http://localhost:9001/api/brands');

    console.log('res====>', res.data);
  };

  const {
    data: value,
    error,
    loading
  } = useFetch(`http://localhost:9001/api/categories/${ids}/products`);

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 5
    },
    {
      field: 'name',
      headerName: 'Items Summary',
      width: 200
    },
    {
      field: 'price',
      headerName: 'Created Date',
      width: 200
    },
    {
      field: 'quantity',
      headerName: 'products',
      width: 200
    },
    {
      field: 'date',
      headerName: 'products',
      width: 200
    }
  ];

  React.useEffect(() => {
    // fetch();
    setUnit(value.length);
  }, [ids]);

  return (
    <ProductsContainer>
      <Grid>
        <Header>
          <Heading>{catName}</Heading>
          <Item>{unit} Item(s)</Item>
        </Header>
        <Content>
          <Wrapper>
            <Headings>
              <Item>Unit</Item>
              <Item>brand</Item>
              <Item>color</Item>
              {}
            </Headings>
            <Data>
              <Item>{unit}</Item>
              <Item>
                {value.map((item: any) => (
                  <p>{item.brand}</p>
                ))}
              </Item>
              <Item>
                <ColorWrapper>
                  <Colors>
                    {chipData.map((data) => {
                      // let icon;
                      return (
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 0.5 }}
                          whileTap={{ scale: 0.9 }}>
                          <Chip
                            color="primary"
                            icon={Icon.Close}
                            label={data.label}
                            onDelete={
                              data.label === 'React'
                                ? undefined
                                : handleDelete(data)
                            }
                            size="small"
                            sx={{
                              backgroundColor: 'var(--color-secondary)',
                              borderRadius: '7px'
                            }}
                          />
                        </motion.div>
                      );
                    })}
                  </Colors>
                </ColorWrapper>
              </Item>
            </Data>
          </Wrapper>
          <Divider />
        </Content>
        <Body>
          <div style={{ margin: '10px 0', height: '55vh', width: '100%' }}>
            <div style={{ height: '55vh', width: '100%' }}>
              {/* {value.map((item: any) => {
                return <p>{item.name}</p>;
              })} */}
              <DataGrid
                columns={columns}
                density="compact"
                getRowId={(data: any) => data.id}
                loading={!value ? loading : false}
                // eslint-disable-next-line no-underscore-dangle
                rows={value}
                sx={{
                  border: 'none'
                }}
              />
            </div>
          </div>
        </Body>
      </Grid>
    </ProductsContainer>
  );
};

export default ProductDetails;
