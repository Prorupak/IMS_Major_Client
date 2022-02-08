import React, { useReducer } from 'react';
import CategoryContext from './context';
import {
  categoriesReducer,
  initialState
} from '../useReducer/reducers/categoryReducers';

interface IProps {
  children: React.ReactNode;
  // category: string;
  // categoryDispatch: React.Dispatch<any>;
}

const contextState: React.FC<IProps> = ({ children }) => {
  const [category, categoryDispatch] = useReducer(
    categoriesReducer,
    initialState
  );
  return (
    <CategoryContext.Provider value={{ category, categoryDispatch }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default contextState;
