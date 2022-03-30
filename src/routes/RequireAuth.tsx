/* eslint-disable no-multiple-empty-lines */
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from 'Hooks/useAuth';
import React from 'react';

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const jwtToken = localStorage.getItem('jwtToken');

  // check if user is logged in
  //   if (!jwtToken) {
  //     setIsLoggedIn(false);
  //     // eslint-disable-next-line react/jsx-indent
  //     //     <Navigate replace state={{ from: location }} to="/login" />;
  //   }

  return !auth ? (
    <Outlet />
  ) : (
    <Navigate replace state={{ from: location }} to="/login" />
  );
};

export default RequireAuth;

