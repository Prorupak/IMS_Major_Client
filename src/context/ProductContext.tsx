import axios from 'axios';
import useToggle from 'Hooks/useToggle';
import { useLocalStorage } from 'usehooks-ts';
import { ICategories, IProductsDetails } from 'Interfaces/Interfaces';
import React from 'react';



export const ProductData = React.createContext<any>({
  product: {},
  setProduct: () => { },
});
export const ProductContext = React.createContext<{
  data: IProductsDetails[];
  setData: (data: IProductsDetails[]) => void;
}>({
  data: [],
  setData: () => { }
});
export const ProductToggle = React.createContext<any>({});

type IProps = {
  children: React.ReactNode;
};

export const ProductProvider: React.FC<IProps> = ({ children }) => {
  const [data, setData] = React.useState<IProductsDetails[]>(
    []
  );

  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:9001/api/products');
      setData(res.data);
      setLoading(false);
    } catch (e: any) {
      setLoading(false);
      setError(e);
      console.log('product error', e);
    }

  }

  React.useEffect(() => {
    fetchData();
  }, []);

  const [product, setProduct] = React.useState<any>({});


  const { toggleHandle, value, handleOpen } = useToggle('toggle', false);


  return (
    <>
      <ProductToggle.Provider value={{ toggleHandle, value, handleOpen }}>
        <ProductContext.Provider
          value={{
            data,
            setData
          }}>
          <ProductData.Provider value={{ product, setProduct }}>
            {children}
          </ProductData.Provider>
        </ProductContext.Provider>
      </ProductToggle.Provider>
    </>
  );
};

