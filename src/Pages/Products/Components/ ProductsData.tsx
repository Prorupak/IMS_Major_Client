import React from 'react';
import { IProductsDetails } from '../../../Interfaces/Interfaces';
import { getProducts } from '../../../services/api';

const Categories = () => {
  const [products, setProducts] = React.useState<IProductsDetails[]>([]);
  const fetchData = async () => {
    try {
      const res = await getProducts();
      setProducts(res);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h5>{products}</h5>
    </>
  );
};

export default Categories;
