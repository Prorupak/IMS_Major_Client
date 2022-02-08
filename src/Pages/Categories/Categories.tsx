/* eslint-disable object-shorthand */
import * as React from 'react';
import axios from 'axios';
// import { ProductsContext } from '../../contexts/context';
// import { useDocumentTitle, useFetch } from '../../Hooks';
// import { GET_CATEGORIES } from '../../constants/actionTypes';
// eslint-disable-next-line react/prop-types
const Categories = () => {
  const fetchData = async () => {
    try {
      const { data } = await axios.get('http://localhost:9001/api/categories');
      console.log('category CSP===', data);
    } catch (error) {
      console.log('error', error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  // const { products } = useFetch(
  //   'http://localhost:9001/api/products',
  //   GET_CATEGORIES,
  //   ProductsContext
  // );
  // useDocumentTitle(`${products} - Categories`);
  // console.log('category===', products);

  // useDocumentTitle(`${post}-Product` || 'Product');

  return (
    <div style={{ width: '100%' }}>
      hello
      {/* {products.data.map((item: any) => {
        return (
          <>
            <div key={item.id}>{item.name}</div>
          </>
        );
      })} */}
      {/* {category} */}
    </div>
  );
};

export default Categories;
