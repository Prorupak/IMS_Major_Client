import React from 'react';
import {
  categoryReducers,
  productsReducers,
  toggleReducers
} from '../useReducer';

import Context from './context';
import ToggleMenuContext from './ToggleMenuContext';

interface IProps {
  children: React.ReactNode;
}

const contextState: React.FC<IProps> = ({ children }) => {
  const { toggle, toggleDispatch } = toggleReducers();
  const { category, categoryDispatch } = categoryReducers();
  const { products, productsDispatch } = productsReducers();
  return (
    <ToggleMenuContext.Provider value={{ toggle, toggleDispatch }}>
      <Context.Provider
        value={{
          products,
          productsDispatch,
          category,
          categoryDispatch
        }}>
        {children}
      </Context.Provider>
    </ToggleMenuContext.Provider>
  );
};

export default contextState;
