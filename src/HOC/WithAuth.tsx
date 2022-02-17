import React, { useEffect, useRef, useState } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'api/axios';
import { authReducers } from 'reducers';

// const initailState = {
//   isAuthenticated: false,
//   user: null,
//   isInitialized: false
// };

// eslint-disable-next-line consistent-return
const isValidToken = (token: string) => {
  if (!token) {
    return false;
  }
  const decoded: any = jwtDecode(token);
  console.log('decoded====>', decoded);
  if (decoded.exp < Date.now() / 1000) {
    return false;
  }
};

export const AuthContext = React.createContext<any>({});

const setSession = (token: string) => {
  if (token) {
    localStorage.setItem('jwtToken', token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    localStorage.removeItem('jwtToken');
    delete axios.defaults.headers.common.Authorization;
  }
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [auth, setAuth] = useState('');

  console.log('auth===>');

  // const isLoggedIn = () => {
  //   const token = localStorage.getItem('jwtToken');
  //   if (isValidToken(token)) {
  //     setIsAuthenticated(true);
  //     setSession(token);
  //     return true;
  //   }
  //   return false;
  // };

  return (
    <AuthContext.Provider value={{ setSession, auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
