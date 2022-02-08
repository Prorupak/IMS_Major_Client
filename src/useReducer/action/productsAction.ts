import { IProductsDetails } from '../../Interfaces/Interfaces';
import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  CREATE_PRODUCT,
  CREATE_PRODUCT_SUCCESS
} from '../../constants/actionTypes';

const listProductsStart = (data: any) => {
  return <const>{
    type: GET_PRODUCTS,
    payload: data
  };
};

const listProductsSuccess = (products: IProductsDetails[]) => {
  return <const>{
    type: GET_PRODUCTS_SUCCESS,
    payload: products
  };
};

const createProductStart = (product: FormData) => {
  return <const>{
    type: CREATE_PRODUCT,
    payload: product
  };
};

const createProductSuccess = (product: IProductsDetails) => {
  return <const>{
    type: CREATE_PRODUCT_SUCCESS,
    payload: product
  };
};

export type TProductsAction =
  | ReturnType<typeof listProductsStart>
  | ReturnType<typeof listProductsSuccess>
  | ReturnType<typeof createProductStart>
  | ReturnType<typeof createProductSuccess>;

export default {
  listProductsStart,
  listProductsSuccess,
  createProductStart,
  createProductSuccess
};
