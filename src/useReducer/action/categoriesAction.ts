// import axios from 'axios';
import { ICategories } from '../../Interfaces/Interfaces';
import {
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  CREATE_CATEGORY,
  CREATE_CATEGORY_SUCCESS
} from '../../constants/actionTypes';

// const listCategory = async (dispatch: any) => {
//   try {
//     const { data } = await axios.get(`${process.env.BASE_URL}/categories`);
//     dispatch({
//       type: GET_CATEGORIES,
//       payload: data
//     });
//   } catch ({ message }) {
//     console.log(message);
//     dispatch({
//       type: GET_CATEGORIES_FAIL,
//       payload: message
//     });
//   }
// };

// const createCategory = (product: any) => {
//   return async (dispatch: any, getState: any) => {
//     try {
//       dispatch({ type: CREATE_CATEGORY, payload: product });

//       const {
//         loginUser: { token }
//       } = getState();
//       const { data } = await axios.post(
//         `${process.env.BASE_URL}/categories`,
//         product,
//         {
//           headers: {
//             Authorization: `JWT ${token}`createCategoryStart
//         payload: message
//       });
//     }
//   };
// };

export const listCategoryStart = (data: any) => {
  return <const>{
    type: GET_CATEGORIES,
    payload: data
  };
};

export const listCategorySuccess = (category: ICategories[]) => {
  return <const>{
    type: GET_CATEGORIES_SUCCESS,
    payload: category
  };
};

export const createCategoryStart = (category: FormData) => {
  return <const>{
    type: CREATE_CATEGORY,
    payload: category
  };
};

export const createCategorySuccess = (category: ICategories) => {
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
