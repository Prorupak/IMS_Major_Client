import { useReducer } from 'react';
import {
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS
  // LOGOUT_SUCCESS
} from '../../constants/actionTypes';
import { TAuthActionType } from '../action/authActions';
import { IUser } from '../../Interfaces/Interfaces';

const initialState: IUser = {
  id: '',
  name: '',
  email: '',
  password: '',
  about: [],
  history: [],
  phoneNumber: 0
};

const authReducer = (state = initialState, action: TAuthActionType) => {
  // const {  } = action;
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;

    case LOGOUT_SUCCESS:
      return initialState;

    case REGISTER_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};

const authReducers = () => {
  const [auth, authDispatch] = useReducer(authReducer, initialState);

  return { auth, authDispatch };
};

export default authReducers;
