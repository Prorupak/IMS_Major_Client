/* eslint-disable guard-for-in */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import useToggle, { ToggleContext } from 'Hooks/useToggle';
import { Outlet, useNavigate } from 'react-router';
import Items from 'layout/Items';
import useFetch from 'Hooks/useFetch';
import { CategoryContext } from 'context/CategoryContext';
import { ProductContext, ProductData } from 'context/ProductContext';
import Product from 'layout/Product';

const columns = [
  { field: 'id', headerName: 'ID', width: 5 },
  {
    field: 'name',
    headerName: 'ITEMS SUMMARY',
    width: 500,
    editable: false
  },
  {
    field: 'sku',
    headerName: 'SKU',
    width: 500,
    editable: true
  },
  {
    field: 'stock',
    headerName: 'STOCK IN HAND',
    width: 500,
    editable: true
  },
  {
    field: 'reorder',
    headerName: 'REORDER POINT',
    width: 500,
    editable: true
  }
];

// eslint-disable-next-line react/no-multi-comp
export default function Products() {
  const navigate = useNavigate();

  const handleItem = (row: any) => {
    navigate('', {
      state: { row }
    });
  };

  const { handleOpen, toggleHandle } = React.useContext(ToggleContext);
  const [productDetails] = React.useContext(ProductData);
  const { error, loading } = React.useContext(ProductContext);

  // setCategoryDetails(tableData);

  return (
    <Product>
      <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
        <div style={{ flexGrow: '1' }}>
          {/* @ts-ignore */}
          <DataGrid
            columns={columns}
            // eslint-disable-next-line no-underscore-dangle
            error={!productDetails ? error : null}
            getRowId={(row) => row.id}
            loading={productDetails ? loading : true}
            onRowClick={
              // eslint-disable-next-line operator-linebreak
              (e: any) => {
                handleOpen();
                console.log('e.row=====>', e.row);
                handleItem(e.row);
              }
            }
            onRowDoubleClick={toggleHandle}
            rows={productDetails}
            sx={{
              border: 'none'
            }}
          />
        </div>
      </div>
    </Product>
  );
}










