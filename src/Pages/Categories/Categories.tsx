import * as React from 'react';
import { useParams } from 'react-router-dom';
import useDocumentTitle from '../../Hooks/useDocumentTitle';
import { getProducts } from '../../services/api';
import { IError, IProductsDetails } from '../../Interfaces/Interfaces';

// import { RouteComponentProps } from 'react-router';
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

// const columns: GridColDef[] = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params: GridValueGetterParams) => {
//       return `${params.getValue(params.id, 'firstName') || ''} ${
//         params.getValue(params.id, 'lastName') || ''
//       }`;
//     }
//   }
// ];

// const rows = [
//   {
//     id: 1,
//     lastName: 'Snow',
//     firstName: 'Jon',
//     age: 35
//   },
//   {
//     id: 1,
//     lastName: 'Snow',
//     firstName: 'Jon',
//     age: 35
//   },
//   {
//     id: 1,
//     lastName: 'Snow',
//     firstName: 'Jon',
//     age: 35
//   },
//   {
//     id: 1,
//     lastName: 'Snow',
//     firstName: 'Jon',
//     age: 35
//   },
//   {
//     id: 1,
//     lastName: 'Snow',
//     firstName: 'Jon',
//     age: 35
//   },
//   {
//     id: 1,
//     lastName: 'Snow',
//     firstName: 'Jon',
//     age: 35
//   },
//   {
//     id: 1,
//     lastName: 'Snow',
//     firstName: 'Jon',
//     age: 35
//   },
//   {
//     id: 1,
//     lastName: 'Snow',
//     firstName: 'Jon',
//     age: 35
//   },
//   {
//     id: 1,
//     lastName: 'Snow',
//     firstName: 'Jon',
//     age: 35
//   },
//   {
//     id: 1,
//     lastName: 'Snow',
//     firstName: 'Jon',
//     age: 35
//   },
//   {
//     id: 1,
//     lastName: 'Snow',
//     firstName: 'Jon',
//     age: 35
//   },
//   {
//     id: 1,
//     lastName: 'Snow',
//     firstName: 'Jon',
//     age: 35
//   },
//   {
//     id: 1,
//     lastName: 'Snow',
//     firstName: 'Jon',
//     age: 35
//   },
//   {
//     id: 2,
//     lastName: 'Lannister',
//     firstName: 'Cersei',
//     age: 42
//   },
//   {
//     id: 3,
//     lastName: 'Lannister',
//     firstName: 'Jaime',
//     age: 45
//   },
//   {
//     id: 4,
//     lastName: 'Stark',
//     firstName: 'Arya',
//     age: 16
//   },
//   {
//     id: 5,
//     lastName: 'Targaryen',
//     firstName: 'Daenerys',
//     age: null
//   },
//   {
//     id: 6,
//     lastName: 'Melisandre',
//     firstName: null,
//     age: 150
//   },
//   {
//     id: 7,
//     lastName: 'Clifford',
//     firstName: 'Ferrara',
//     age: 44
//   },
//   {
//     id: 8,
//     lastName: 'Frances',
//     firstName: 'Rossini',
//     age: 36
//   },
//   {
//     id: 9,
//     lastName: 'Roxie',
//     firstName: 'Harvey',
//     age: 65
//   }
// ];

// eslint-disable-next-line react/prop-types
const Categories = () => {
  const { id } = useParams<Record<string, string | undefined>>();
  const [post, setPost] = React.useState<IProductsDetails[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<IError | null>(null);
  console.log('prodcut=====', id);

  useDocumentTitle(`${post}-Product` || 'Product');

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const fetchedProducts = await getProducts();
      console.log(fetchedProducts);
      setPost(fetchedProducts);
      setIsLoading(false);
    } catch (err: any) {
      console.log(err);
      setError(err);
      setIsLoading(false);
    }
  };

  console.log('post=====', post);

  React.useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div style={{ width: '100%' }}>
      {isLoading && !error && <div>Loading...</div>}
      {post}
      {/* <DataGrid
        autoHeight
        checkboxSelection
        columns={columns}
        pageSize={12}
        rows={rows}
        rowsPerPageOptions={[5]}
      /> */}
    </div>
  );
};

export default Categories;
