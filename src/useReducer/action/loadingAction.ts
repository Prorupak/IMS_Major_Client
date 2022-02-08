import {
  SET_AUTH_LOADING,
  SET_GET_USER_LOADING,
  SET_CREATE_CATEGORIES_LOADING,
  SET_CREATE_PRODUCTS_LOADING,
  SET_GET_PRODUCTS_LOADING,
  SET_GET_CATEGORIES_LOADING
} from '../../constants/actionTypes';

const isAuthenticating = (bool: boolean = true) => {
  return <const>{
    type: SET_AUTH_LOADING,
    payload: bool
  };
};

const isGettingUsers = (bool: boolean = true) => {
  return <const>{
    type: SET_GET_USER_LOADING,
    payload: bool
  };
};

const isAddingProducts = (bool: boolean = true) => {
  return <const>{
    type: SET_CREATE_PRODUCTS_LOADING,
    payload: bool
  };
};

const isGettingProducts = (bool: boolean = true) => {
  return <const>{
    type: SET_GET_PRODUCTS_LOADING,
    payload: bool
  };
};

const isAddingCategories = (bool: boolean = true) => {
  return <const>{
    type: SET_CREATE_CATEGORIES_LOADING,
    payload: bool
  };
};

const isGettingCategories = (bool: boolean = true) => {
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

export default {
  isAuthenticating,
  isAddingCategories,
  isGettingCategories,
  isAddingProducts,
  isGettingProducts,
  isGettingUsers
}
