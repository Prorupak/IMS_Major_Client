import React from 'react';
import axios from 'axios';
import Context from '../../../contexts/context';
import { GET_PRODUCTS } from '../../../constants/actionTypes';

const Categories = () => {
  const { products, productsDispatch } = React.useContext(Context);
  const fetchData = async () => {
    try {
      const { data } = await axios.get('http://localhost:9001/api/products');
      console.log('category CSP===', data);
      productsDispatch({ type: GET_PRODUCTS, payload: { data } });
    } catch (error) {
      console.log('error', error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h6>
        {products.data.map((item: any) => {
          return (
            <>
              <div key={item.id}>{item.name}</div>
            </>
          );
        })}
      </h6>
    </>
  );
};

export default Categories;
