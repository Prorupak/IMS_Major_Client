// import { useReducer } from 'react';
import { ICategories } from '../../Interfaces/Interfaces';
import { TCategoryAction } from '../action/categoriesAction';
import {
  // CREATE_CATEGORY,
  GET_CATEGORIES
  // GET_CATEGORIES_FAIL,
  // GET_CATEGORIES_SUCCESS,
  // CREATE_CATEGORY_FAIL,
  // GET_PRODUCTS_FAIL,
  // CREATE_CATEGORY_SUCCESS
} from '../../constants/actionTypes';

type initialStateType = {
  data: ICategories[];
};
export const initialState: initialStateType = {
  data: []
};

export const categoriesReducer = (
  state: typeof initialState,
  action: TCategoryAction
) => {
  switch (action.type) {
    case GET_CATEGORIES:
      // eslint-disable-next-line no-case-declarations
      const { data } = action.payload;
      return {
        ...state,
        data
      };
    default:
      return state;
  }
};
