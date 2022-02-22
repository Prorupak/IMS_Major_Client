/* eslint-disable guard-for-in */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { ToggleContext } from 'Hooks/useToggle';
import { Outlet, useNavigate } from 'react-router';
import Items from 'layout/Items';
import useFetch from 'Hooks/useFetch';

const columns = [
  { field: 'id', headerName: 'ID', width: 5 },
  {
    field: 'name',
    headerName: 'Items Summary',
    width: 200,
    editable: false
  },
  {
    field: 'date',
    headerName: 'Selling Price',
    width: 200,
    editable: true
  }
];

// eslint-disable-next-line react/no-multi-comp
export default function Categories() {
  const navigate = useNavigate();

  const { toggleHandle } = React.useContext(ToggleContext);

  const handleItem = (id: string, name: string) => {
    navigate('', {
      state: { catId: id, catName: name }
    });
  };

  const {
    data: tableData,
    loading,
    error
  } = useFetch('http://localhost:9001/api/categories');

  return (
    <>
      <div style={{ display: 'flex', height: '100%', width: '100%' }}>
        <div style={{ flexGrow: '1' }}>
          {/* @ts-ignore */}
          <DataGrid
            columns={columns}
            // eslint-disable-next-line no-underscore-dangle
            error={!tableData ? error : null}
            getRowId={(row) => row.id}
            loading={loading}
            onRowClick={
              // eslint-disable-next-line operator-linebreak
              toggleHandle &&
              ((e: any) => {
                handleItem(e.id, e.row.name);
                console.log('e====>', e);
                console.log('length====>', e.row);
                console.log('product====>', e.row.products[0]);
                console.log(
                  'ProductId====>',
                  e.row.products.map((id: any) => id.id)
                );
              })
            }
            onRowDoubleClick={toggleHandle}
            rows={tableData}
            sx={{
              border: 'none'
            }}
          />
        </div>
      </div>
    </>
  );
}
