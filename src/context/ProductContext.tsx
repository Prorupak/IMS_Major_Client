import axios from 'axios';
import useToggle from 'Hooks/useToggle';
import { useLocalStorage } from 'usehooks-ts';
import { ICategories, IProductsDetails } from 'Interfaces/Interfaces';
import React from 'react';

export const ProductData = React.createContext<any>({});
export const ProductContext = React.createContext<any>({});
export const ProductToggle = React.createContext<any>({});

type IProps = {
  children: React.ReactNode;
};

export const ProductProvider: React.FC<IProps> = ({ children }) => {

  const [product, setProduct] = React.useState<any>({});

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
  return (
    <>
      <ProductToggle.Provider value={{ toggleHandle, value, handleOpen }}>
        <ProductContext.Provider
          value={{
            postData,
            updateData,
            data,
            update,
          }}>
          <ProductData.Provider value={{ product, setProduct }}>
            {children}
          </ProductData.Provider>
        </ProductContext.Provider>
      </ProductToggle.Provider>
    </>
  );
};

