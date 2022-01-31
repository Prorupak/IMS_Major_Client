import { useReducer } from 'react';
import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS
  // LOGOUT_SUCCESS
} from '../../constants/actionTypes';
import { TAuthActionType } from '../action/authActions';
import { IUser } from '../../Interfaces/Interfaces';

// interface props {
//   user: string | null;
// }

// const user: props = localStorage.getItem('currentUser')
//   ? JSON.parse(localStorage.getItem('currentUser')).user
//   : '';

// const token = localStorage.getItem('currentUser')
//   ? JSON.parse(localStorage.getItem('currentUser')).auth_token
//   : '';
const initialState: IUser = {
  email: '',
  password: ''
};

const authReducer = (state = initialState, action: TAuthActionType) => {
  // const { type } = action;
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;

    case REGISTER_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};

export const authReducers = () => {
  const [auth, authDispatch] = useReducer(authReducer, initialState);

  return { auth, authDispatch };
};
