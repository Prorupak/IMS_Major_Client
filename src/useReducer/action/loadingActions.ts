import {
  SET_AUTH_LOADING,
  SET_GET_USER_LOADING,
  SET_CREATE_CATEGORIES_LOADING,
  SET_CREATE_PRODUCTS_LOADING,
  SET_GET_PRODUCTS_LOADING,
  SET_GET_CATEGORIES_LOADING
} from '../../constants/actionTypes';

export const isAuthenticating = (bool: boolean = true) => {
  return <const>{
    type: SET_AUTH_LOADING,
    payload: bool
  };
};

export const isGettingUsers = (bool: boolean = true) => {
  return <const>{
    type: SET_GET_USER_LOADING,
    payload: bool
  };
};

export const isAddingProducts = (bool: boolean = true) => {
  return <const>{
    type: SET_CREATE_PRODUCTS_LOADING,
    payload: bool
  };
};

export const isGettingProducts = (bool: boolean = true) => {
  return <const>{
    type: SET_GET_PRODUCTS_LOADING,
    payload: bool
  };
};

export const isAddingCategories = (bool: boolean = true) => {
  return <const>{
    type: SET_CREATE_CATEGORIES_LOADING,
    payload: bool
  };
};

export const isGettingCategories = (bool: boolean = true) => {
  return <const>{
    type: SET_GET_CATEGORIES_LOADING,
    payload: bool
  };
};

export type TLoadingActionType =
  | ReturnType<typeof isAuthenticating>
  | ReturnType<typeof isAddingCategories>
  | ReturnType<typeof isGettingCategories>
  | ReturnType<typeof isAddingProducts>
  | ReturnType<typeof isGettingProducts>
  | ReturnType<typeof isGettingUsers>;
