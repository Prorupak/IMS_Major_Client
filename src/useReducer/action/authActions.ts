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

export const loginStart = (email: string, password: string) => {
  return <const>{
    type: LOGIN_START,
    payload: {
      email,
      password
    }
  };
};

export const loginSuccess = (auth: IUser) => {
  return <const>{
    type: LOGIN_SUCCESS,
    payload: auth
  };
};

export const logoutStart = (callback?: () => void) => {
  return <const>{
    type: LOGOUT_START,
    payload: { callback }
  };
};

export const logoutSuccess = () => {
  return <const>{
    type: LOGOUT_SUCCESS
  };
};

export const registerStart = ({
  email,
  name,
  password,
  about = ''
}: IRegister) => {
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

export const registerSuccess = (userAuth: IUser) => {
  return <const>{
    type: REGISTER_SUCCESS,
    payload: userAuth
  };
};

export const checkToken = () => {
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
