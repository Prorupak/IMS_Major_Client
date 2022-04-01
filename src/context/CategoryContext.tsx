import { ICategories } from 'Interfaces/Interfaces';
import React from 'react';
import { toggleReducers } from '../reducers';

export const CategoryContext = React.createContext<any>({});

type IProps = {
  children: React.ReactNode;
};

export const CategoryProvider: React.FC<IProps> = ({ children }) => {
  const [data, setData] = React.useState<ICategories>({} as ICategories);
  const [update, setUpdate] = React.useState<ICategories>({} as ICategories);

  const postData = (post: any) => {
    setData(post);
  };

  const updateData = (post: any) => {
    setUpdate(post);
  };
  //   const { toggle, toggleDispatch } = toggleReducers();
  const [categoryDetails, setCategoryDetails] = React.useState({});
  console.log('categoryDetails', categoryDetails);
  return (
    <>
      <CategoryContext.Provider
        value={{
          categoryDetails,
          setCategoryDetails,
          postData,
          updateData,
          data,
          update
        }}>
        {children}
      </CategoryContext.Provider>
    </>
  );
};

