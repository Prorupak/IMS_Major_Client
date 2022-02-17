import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from 'Hooks/useAuth';
import React from 'react';

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const jwtToken = localStorage.getItem('jwtToken');

  // check if user is logged in
  if (!jwtToken) {
    setIsLoggedIn(false);
    return <Navigate replace state={{ from: location }} to="/login" />;
  }

  return jwtToken ? (
    <Outlet />
  ) : (
    <Navigate replace state={{ from: location }} to="/login" />
  );
};

export default RequireAuth;
