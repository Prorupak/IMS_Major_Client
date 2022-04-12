/* eslint-disable guard-for-in */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { DataGrid, GridValueGetterParams } from '@mui/x-data-grid';
import axios from 'axios';
import useToggle, { ToggleContext } from 'Hooks/useToggle';
import { Outlet, useNavigate } from 'react-router';
import Items from 'layout/Items';
import useFetch from 'Hooks/useFetch';
import { CategoryContext, CategoryData } from 'context/CategoryContext';
import { ProductContext, ProductData } from 'context/ProductContext';
import Product from 'layout/Product';
import { CustomToolbar } from 'Themes/MaterialUI';

const columns = [
  { field: 'id', headerName: 'ID', width: 5 },
  {
    field: 'name',
    headerName: 'ITEMS SUMMARY',
    width: 450,
    editable: false
  },
  {
    field: 'sku',
    headerName: 'SKU',
    width: 450,
    editable: false
  },
  {
    field: 'openingStock',
    headerName: 'STOCK IN HAND',
    width: 450,
    editable: false,
    valueGetter: (params: GridValueGetterParams) => {
      return params.row.inventoryTracking.map((item: any) => item.openingStock)
    } 
  },
  {
    field: 'reorder',
    headerName: 'REORDER POINT',
    width: 450,
    editable: false,
    valueGetter: (params: GridValueGetterParams) => {
      return params.row.inventoryTracking.map((item: any) => item.reorderPoint)
    } 
  }
];

// eslint-disable-next-line react/no-multi-comp
export default function Products() {
  const [productDetails, setProductDetails] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  const navigate = useNavigate();
  const { setProduct } = React.useContext(ProductData);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:9001/api/products');
      setProductDetails(res.data);
      setLoading(false);
      console.log('productDetails', productDetails);
    } catch (err: any) {
      console.log('err===>', err);
      setError(err.message);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const { handleOpen, toggleHandle } = React.useContext(ToggleContext);


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
            loading={productDetails ? false : true}
            components={{
              Toolbar: CustomToolbar,
            }}
            onRowClick={
              // eslint-disable-next-line operator-linebreak
              (e: any) => {
                handleOpen();
                console.log('e.row=====>', e.row);
                setProduct(e.row);
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










