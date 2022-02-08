import React from 'react';
import axios from 'axios';
// import { ProductsContext } from '../../../contexts/context';
// import { useFetch } from '../../../Hooks';
// import { GET_PRODUCTS } from '../../../constants/actionTypes';

const Categories = () => {
  const fetchData = async () => {
    try {
      const { data } = await axios.get('http://localhost:9001/api/products');
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
  //   GET_PRODUCTS,
  //   ProductsContext
  // );
  // console.log('category pp===', products);
  return (
    <>
      <h5>
        {/* {products.data.map((item: any) => {
          return (
            <>
              {item.id}
              <div key={item.id}>{item.name}</div>
            </>
          );
        })} */}
      </h5>
    </>
  );
};

export default Categories;
