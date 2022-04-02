import axios from 'axios';
import useToggle from 'Hooks/useToggle';
import { ICategories, IProductsDetails } from 'Interfaces/Interfaces';
import React from 'react';

export const ProductData = React.createContext<any[]>([]);
export const ProductContext = React.createContext<any>({});
export const ProductToggle = React.createContext<any>({});

type IProps = {
  children: React.ReactNode;
};

export const ProductProvider: React.FC<IProps> = ({ children }) => {
  const [productDetails, setProductDetails] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:9001/api/products');
      setProductDetails(res.data);
      setLoading(false);
      console.log('productDetails', productDetails);
    } catch (err: any) {
      console.log('err===>', err);
      setError(err.message);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const [data, setData] = React.useState<IProductsDetails>(
    {} as IProductsDetails
  );
  const [update, setUpdate] = React.useState<IProductsDetails>(
    {} as IProductsDetails
  );

  const { toggleHandle, value, handleOpen } = useToggle('toggle', false);

  const postData = (post: any) => {
    setData(post);
  };

  const updateData = (post: any) => {
    setUpdate(post);
  };
  //   const { toggle, toggleDispatch } = toggleReducers();
  console.log('productDetails', productDetails);
  return (
    <>
      <ProductToggle.Provider value={{ toggleHandle, value, handleOpen }}>
        <ProductContext.Provider
          value={{
            productDetails,
            postData,
            updateData,
            data,
            update,
            loading,
            error
          }}>
          <ProductData.Provider value={[productDetails, setProductDetails]}>
            {children}
          </ProductData.Provider>
        </ProductContext.Provider>
      </ProductToggle.Provider>
    </>
  );
};

