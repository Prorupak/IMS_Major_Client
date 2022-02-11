import { ICategories } from '../../Interfaces/Interfaces';
import {
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  CREATE_CATEGORY,
  CREATE_CATEGORY_SUCCESS
} from '../../constants/actionTypes';

const listCategoryStart = (data: any) => {
  return <const>{
    type: GET_CATEGORIES,
    payload: [data]
  };
};

const listCategorySuccess = (category: ICategories[]) => {
  return <const>{
    type: GET_CATEGORIES_SUCCESS,
    payload: [category]
  };
};

const createCategoryStart = (category: FormData) => {
  return <const>{
    type: CREATE_CATEGORY,
    payload: category
  };
};

const createCategorySuccess = (category: ICategories) => {
  return <const>{
    type: CREATE_CATEGORY_SUCCESS,
    payload: category
  };
};

export type TCategoryAction =
  | ReturnType<typeof listCategoryStart>
  | ReturnType<typeof listCategorySuccess>
  | ReturnType<typeof createCategoryStart>
  | ReturnType<typeof createCategorySuccess>;

export default {
  listCategoryStart,
  listCategorySuccess,
  createCategoryStart,
  createCategorySuccess
};
