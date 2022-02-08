import React from 'react';
import { categoryReducers, productsReducers } from '../useReducer';
import Context from './context';

interface IProps {
  children: React.ReactNode;
}

const contextState: React.FC<IProps> = ({ children }) => {
  const { category, categoryDispatch } = categoryReducers();
  const { products, productsDispatch } = productsReducers();
  return (
    <Context.Provider
      value={{
        products,
        productsDispatch,
        category,
        categoryDispatch
      }}>
      {children}
    </Context.Provider>
  );
};

export default contextState;
