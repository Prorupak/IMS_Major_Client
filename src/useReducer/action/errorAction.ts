import {
  SET_AUTH_ERR_MSG,
  CLEAR_AUTH_ERR_MSG,
  SET_PRODUCT_ERR_MSG,
  SET_CATEGORIES_ERR_MSG
} from '../../constants/actionTypes';
import { IError } from '../../Interfaces/Interfaces';

const setAuthErrorMessage = (error: IError | null) => {
  return <const>{
    type: SET_AUTH_ERR_MSG,
    payload: error
  };
};

const setProductErrorMessage = (error: IError | null) => {
  return <const>{
    type: SET_PRODUCT_ERR_MSG,
    payload: error
  };
};

const setCategoryErrorMessage = (error: IError | null) => {
  return <const>{
    type: SET_CATEGORIES_ERR_MSG,
    payload: error
  };
};

const clearAuthErrorMessage = (error: IError | null) => {
  return <const>{
    type: CLEAR_AUTH_ERR_MSG,
    payload: error
  };
};

export type ErrorActionType =
  | ReturnType<typeof setAuthErrorMessage>
  | ReturnType<typeof clearAuthErrorMessage>
  | ReturnType<typeof setProductErrorMessage>
  | ReturnType<typeof setCategoryErrorMessage>;

export default {
  setAuthErrorMessage,
  clearAuthErrorMessage,
  setProductErrorMessage,
  setCategoryErrorMessage
};
