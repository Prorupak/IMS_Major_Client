import axios from 'axios';
import useFetch from 'Hooks/useFetch';
import useToggle from 'Hooks/useToggle';
import { ICategories } from 'Interfaces/Interfaces';
import React from 'react';
import { toggleReducers } from '../reducers';

export const CategoryData = React.createContext<{
  categoryDetails: any;
  setCategoryDetails: React.Dispatch<React.SetStateAction<any>>;
}>({
  categoryDetails: {},
  setCategoryDetails: () => {}
});
export const CategoryContext = React.createContext<any>({
  postData: () => {},
  updateData: () => {},
  update: {},
  data: {},
  loading: Boolean,
  error: String
});
export const CategoryToggle = React.createContext<any>({});

type IProps = {
  children: React.ReactNode;
};

export const CategoryProvider: React.FC<IProps> = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [categoryDetails, setCategoryDetails] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');
  const [data, setData] = React.useState<ICategories>({} as ICategories);
  const [update, setUpdate] = React.useState<ICategories>({} as ICategories);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:9001/api/categories');
      setCategoryDetails(res.data);
      setLoading(false);
      console.log('categoryDetails', categoryDetails);
    } catch (err: any) {
      console.log('err===>', err);
      setError(err.message);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const postData = (post: any) => {
    setData(post);
  };

  const updateData = (post: any) => {
    setUpdate(post);
  };
  return (
    <>
      <CategoryToggle.Provider value={{ value: open, setOpen }}>
        <CategoryContext.Provider
          value={{
            postData,
            updateData,
            data,
            update,
            loading,
            error
          }}>
          <CategoryData.Provider
            value={{ categoryDetails, setCategoryDetails }}>
            {children}
          </CategoryData.Provider>
        </CategoryContext.Provider>
      </CategoryToggle.Provider>
    </>
  );
};


