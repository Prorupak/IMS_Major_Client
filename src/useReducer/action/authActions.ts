import {
  CHECK_TOKEN,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  REGISTER_START,
  REGISTER_SUCCESS
} from '../../constants/actionTypes';

import { IRegister, IUser } from '../../Interfaces/Interfaces';

const loginStart = (email: string, password: string) => {
  return <const>{
    type: LOGIN_START,
    payload: {
      email,
      password
    }
  };
};

const loginSuccess = (auth: IUser) => {
  return <const>{
    type: LOGIN_SUCCESS,
    payload: auth
  };
};

const logoutStart = (callback?: () => void) => {
  return <const>{
    type: LOGOUT_START,
    payload: { callback }
  };
};

const logoutSuccess = () => {
  return <const>{
    type: LOGOUT_SUCCESS
  };
};

// eslint-disable-next-line object-curly-newline
const registerStart = ({ email, name, password, about = '' }: IRegister) => {
  return <const>{
    type: REGISTER_START,
    payload: {
      email,
      name,
      password,
      about
    }
  };
};

const registerSuccess = (userAuth: IUser) => {
  return <const>{
    type: REGISTER_SUCCESS,
    payload: userAuth
  };
};

const checkToken = () => {
  return <const>{
    type: CHECK_TOKEN
  };
};

export type TAuthActionType =
  | ReturnType<typeof loginStart>
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof logoutStart>
  | ReturnType<typeof logoutSuccess>
  | ReturnType<typeof registerStart>
  | ReturnType<typeof registerSuccess>
  | ReturnType<typeof checkToken>;

export default {
  loginStart,
  loginSuccess,
  logoutStart,
  logoutSuccess,
  registerStart,
  registerSuccess,
  checkToken
};
