import React from 'react';
import { TProductsAction } from '../action/productsAction';
import { IProductsDetails } from '../../Interfaces/Interfaces';

import { GET_PRODUCTS } from '../../constants/actionTypes';

type initialStateType = {
  data: IProductsDetails[];
};

const initialState: initialStateType = {
  data: []
};

const productReducers = (
  state: typeof initialState,
  action: TProductsAction
) => {
  const { payload, type } = action;
  switch (type) {
    case GET_PRODUCTS:
      // eslint-disable-next-line no-case-declarations
      const { data } = payload;
      return {
        ...state,
        data
      };

    default:
      return state;
  }
};

const productsReducers = () => {
  const [products, productsDispatch] = React.useReducer(
    productReducers,
    initialState
  );

  return {
    products,
    productsDispatch
  };
};

export default productsReducers;
