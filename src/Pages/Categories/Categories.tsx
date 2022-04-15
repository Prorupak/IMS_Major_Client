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
import { CustomToolbar } from 'Themes/MaterialUI';

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

  const handleItem = (row?: string) => {
    navigate('', {
      state: { row }
    });
    setCategoryDetails(row);
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
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            columns={columns}
            error={!tableData ? error : null}
            getRowId={(row) => row.id}
            loading={tableData ? false : loading}
            components={{
              Toolbar: CustomToolbar,
            }}
            onRowClick={
              (e: any) => {
                handleOpen();
                console.log('eros', e.row);

                handleItem(e.row);
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



