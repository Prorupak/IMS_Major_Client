import React from 'react';
import { toggleReducers } from '../reducers';

export const CategoryContext = React.createContext<any>({});

type IProps = {
  children: React.ReactNode;
};

export const CategoryProvider: React.FC<IProps> = ({ children }) => {
  //   const { toggle, toggleDispatch } = toggleReducers();
  const [categoryDetails, setCategoryDetails] = React.useState({});
  console.log('categoryDetails', categoryDetails);
  return (
    <>
      <CategoryContext.Provider value={{ categoryDetails, setCategoryDetails }}>
        {children}
      </CategoryContext.Provider>
    </>
  );
};
