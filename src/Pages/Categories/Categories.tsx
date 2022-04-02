/* eslint-disable operator-linebreak */
/* eslint-disable guard-for-in */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import useToggle, { ToggleContext } from 'Hooks/useToggle';
import { Outlet, useNavigate } from 'react-router';
import Items from 'layout/Items';
import useFetch from 'Hooks/useFetch';
import {
  CategoryContext,
  CategoryData,
  CategoryToggle
} from 'context/CategoryContext';

// eslint-disable-next-line react/no-multi-comp
export default function Categories() {
  const navigate = useNavigate();
  const [tableData, setTableData] = React.useState<any[]>([]);
  const { error, loading } = React.useContext(CategoryContext);
  const { toggleHandle, handleOpen } = React.useContext(ToggleContext);
  const { categoryDetails, setCategoryDetails } =
    React.useContext(CategoryData);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:9001/api/categories');
    setTableData(response.data);
    console.log('response.data', response.data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  console.log('CategoryDetails=====>', categoryDetails);

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
      id,
      name,
      attrs,
      options,
      mId
    });
  };

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
      headerName: 'STOCK IN HAND',
      width: 500,
      editable: false
    }
  ];

  // setCategoryDetails(tableData);

  return (
    <Items>
      <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
        <div style={{ flexGrow: '1' }}>
          {/* @ts-ignore */}
          <DataGrid
            columns={columns}
            error={!tableData ? error : null}
            // eslint-disable-next-line no-underscore-dangle
            getRowId={(row) => row.id}
            loading={tableData ? false : loading}
            onRowClick={
              // eslint-disable-next-line operator-linebreak
              (e: any) => {
                handleOpen();
                console.log('eros', e.row);

                handleItem(
                  e.id,
                  e.row.name,
                  e.row.multipleItems.map((item: any) => item.attribute),
                  e.row.multipleItems.map((item: any) => item.options),
                  // eslint-disable-next-line no-underscore-dangle
                  e.row.multipleItems.map((item: any) => item._id)
                );
              }
            }
            onRowDoubleClick={toggleHandle}
            rows={tableData}
            sx={{
              border: 'none'
            }}
          />
        </div>
      </div>
    </Items>
  );
}

