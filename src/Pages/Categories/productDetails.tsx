
import React from 'react';
// import Close from '../../../../Assets/Icons/Close.svg';
import { Item, Divider, Heading } from '../../Themes/utilityThemes';
import {
  DataGrid,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import ProductsContainer from 'Components/shared/ProductsContainer';
import { CustomToolbar } from 'Themes/MaterialUI';
import { CategoryData } from 'context/CategoryContext';



export const Grid = styled.div`
  overflow-x: hidden;
  display: grid;
  grid-template-areas:
    'header'
    'body';

  grid-template-rows: auto auto fill-content;

  margin: var(--spacing-15) var(--spacing-15);
`;

const Header = styled.header`
  grid-area: header;
  grid-row: span 1;
  margin: var(--spacing-5) 0;
`;

const Body = styled.section`
  grid-area: body;
  margin: var(--spacing-5) 0;
`;

const ProductDetails = () => {
  const { categoryDetails } = React.useContext(CategoryData);
  console.log('categoryDetails', categoryDetails.id);


  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 5
    },
    {
      field: 'name',
      headerName: 'ITEMS SUMMARY',
      width: 200
    },
    {
      field: 'sellingPrice',
      headerName: 'SELLING PRICE',
      width: 200,
      valueGetter: (params: GridValueGetterParams) => {
        return params.row.SalesInformation.map((item: any) => item.sellingPrice);
      }
    },
    {
      field: 'costPrice',
      headerName: ' COST PRICE',
      width: 200,
      valueGetter: (params: GridValueGetterParams) => {
        return params.row.PurchaseInformation.map((item: any) => item.costPrice);
      }
    },
    {
      field: 'date',
      headerName: 'DATE',
      width: 200
    }
  ];

  return (
    <ProductsContainer>
      <Grid>
        <Header>
          <Heading>{categoryDetails.name}</Heading>
          <Item fontWeight="500" height="1%">
            {categoryDetails.products.length} Item(s) Available
          </Item>
        </Header>
        <Divider />
        <Body>
          <div style={{ margin: '10px 0', height: '66vh', width: '100%' }}>
            <div style={{ height: '66vh', width: '100%' }}>
              <DataGrid
                columns={columns}
                components={{
                  Toolbar: CustomToolbar,
                }}
                density="compact"
                loading={false}
                rows={categoryDetails.products}
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








































































































































































