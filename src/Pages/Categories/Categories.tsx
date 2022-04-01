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



// eslint-disable-next-line react/no-multi-comp
export default function Categories({ toggleHandle }: any) {
  const navigate = useNavigate();
  const { setCategoryDetails } = React.useContext(CategoryContext);

  const handleItem = (
    id: string,
    name: string,
    attrs: string,
    options: string,
    mId: string
  ) => {
    navigate('', {
      state: { catId: id, catName: name, mId, attrs, options }
    });
    setCategoryDetails({
      catId: id,
      catName: name,
      mId,
      attrs,
      options
    });
  };

  const {
    data: tableData,
    loading,
    error
  } = useFetch('http://localhost:9001/api/categories');

  console.log('tableData', tableData);

  const columns = [
    // { field: 'id', headerName: 'ID', width: 5 },
    {
      field: 'name',
      headerName: 'ITEMS SUMMARY',
      width: 500,
      editable: false
    },
    {
      field: `${tableData.length}`,
      headerName: 'STOCK IN HAND',
      width: 500,
      editable: true
    }
  ];

  // setCategoryDetails(tableData);

  return (
    <>
      <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
        <div style={{ flexGrow: '1' }}>
          {/* @ts-ignore */}
          <DataGrid
            columns={[{ field: 'id' }] && columns}
            // eslint-disable-next-line no-underscore-dangle
            error={!tableData ? error : null}
            getRowId={(row) => row.id}
            loading={tableData ? loading : true}
            onRowClick={
              // eslint-disable-next-line operator-linebreak
              toggleHandle &&
              ((e: any) => {
                console.log('eros', e.row);
                setCategoryDetails({
                  catId: e.id
                });
                handleItem(
                  e.id,
                  e.row.name,
                  e.row.multipleItems.map((item: any) => item.attribute),
                  e.row.multipleItems.map((item: any) => item.options),
                  // eslint-disable-next-line no-underscore-dangle
                  e.row.multipleItems.map((item: any) => item._id)
                );
              })
            }
            onRowDoubleClick={toggleHandle}
            rows={[{ id: 1 }] && tableData}
            sx={{
              border: 'none'
            }}
          />
        </div>
      </div>
    </>
  );
}






