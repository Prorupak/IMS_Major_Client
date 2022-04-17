import * as React from 'react';
import { DataGrid, GridValueGetterParams } from '@mui/x-data-grid';
import axios from 'axios';
import { ToggleContext } from 'Hooks/useToggle';
import { useNavigate } from 'react-router';
import { ProductContext, ProductData } from 'context/ProductContext';
import { CustomToolbar } from 'Themes/MaterialUI';
import Customer from 'layout/Customer';
import { CustomerContext, CustomerData } from 'context/CustomerContext';

const columns = [
     { field: 'id', headerName: 'ID', width: 5 },
     {
          field: 'customerDisplayName',
          headerName: 'NAME',
          width: 400,
          editable: false
     },
     {
          field: 'companyName',
          headerName: 'COMPANY NAME',
          width: 400,
          editable: false
     },

     {
          field: 'email',
          headerName: 'EMAIL',
          width: 400,
          editable: false,
     },
     {
          field: 'phone',
          headerName: 'WORK PHONE',
          width: 400,
          editable: false,
     },

     {
          field: 'receivables',
          headerName: 'RECEIVABLES',
          width: 400,
          editable: false,
     },

];

export default function Customers() {
     const [productDetails, setProductDetails] = React.useState<any[]>([]);
     const [loading, setLoading] = React.useState<boolean>(false);
     const [error, setError] = React.useState<string>('');
     const [saveId, setSaveId] = React.useState<string>('');
     console.log('saveId', saveId);

     const { data } = React.useContext(CustomerContext);

     console.log('data', data);

     React.useEffect(() => {
          localStorage.setItem('saveId', saveId);
     }, [saveId]);

     React.useEffect(() => {
          fetchData();
     }, []);

     const navigate = useNavigate();
     const { setCustomer } = React.useContext(CustomerData);

     const fetchData = async () => {
          try {
               setLoading(true);
               const res = await axios.get('http://localhost:9001/api/customer');
               console.log('res.data', res.data);
               const resData = await res.data;
               // setProductDetails([...productDetails, res.data]);
               setProductDetails([...productDetails, { name: resData.name }]);
               console.log('productDetailsss', productDetails);
               setLoading(false);
               console.log('productDetails', productDetails);
          } catch (err: any) {
               console.log('err===>', err);
               setError(err.message);
          }
     };



     const { toggleHandle, handleOpen } = React.useContext(ToggleContext);


     return (

          <>
               {
                    loading ? <div>Loading...</div> : (
                         <Customer>
                              <div style={{ display: 'flex', height: '100vh', width: '100%', marginTop: "65px" }}>
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
                                                       setCustomer(e.row);
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
                         </Customer>
                    )

               }
          </>

     );
}
