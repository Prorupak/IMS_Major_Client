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
      return params.row?.inventoryTracking?.map((item: any) => item.openingStock)
    } 
  },
  {
    field: 'reorder',
    headerName: 'REORDER POINT',
    width: 450,
    editable: false,
    valueGetter: (params: GridValueGetterParams) => {
      return params.row?.inventoryTracking?.map((item: any) => item.reorderPoint)
    } 
  }
];

export default function Products() {
  const [productDetails, setProductDetails] = React.useState<any[]>([]);
  const [productDetailss, setProductDetailss] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');
  const [saveId, setSaveId] = React.useState<string>('');
  console.log('saveId', saveId);

  const { data } = React.useContext(ProductContext);

  console.log('data', data);

  React.useEffect(() => {
    localStorage.setItem('saveId', saveId);
  }, [saveId]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();
  const { setProduct } = React.useContext(ProductData);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:9001/api/products');
      console.log('res.data', res.data);
      const resData = await res.data;
      // setProductDetails([...productDetails, res.data]);
      setProductDetailss([...productDetailss, { name: resData.name }]);
      console.log('productDetailsss', productDetailss);
      setLoading(false);
      console.log('productDetails', productDetails);
    } catch (err: any) {
      console.log('err===>', err);
      setError(err.message);
    }
  };



  const { handleOpen, toggleHandle } = React.useContext(ToggleContext);


  return (
    <Product>
      <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          {/* @ts-ignore */}
          <DataGrid
            columns={columns}
            error={!productDetails ? error : null}
            loading={productDetails ? false : true}
            style={{
              fontWeight: 500,
            }}
            components={{
              Toolbar: CustomToolbar,
            }}
            onRowClick={
              (e: any) => {
                handleOpen();
                console.log('e.row=====>', e.row);
                const { id } = e.row;
                setSaveId(id);
                setProduct(e.row);
              }
            }
            onRowDoubleClick={toggleHandle}
            rows={data}
            sx={{
              border: 'none'
            }}
          />
        </div>
      </div>
    </Product>
  );
}
