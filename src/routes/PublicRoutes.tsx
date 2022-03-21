import { QuickCreate } from 'Components/main/Navbar/QuickCreate/Elements.QuickCreate';
import { AnimatePresence } from 'framer-motion';
import LandingPage from 'Pages/landing/landingPage';
import Login from 'Pages/login/Login';
import Register from 'Pages/register/Register';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router';

const PublicRoutes = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter initial>
        <Routes key={location.pathname} location={location}>
          <Route element={<LandingPage />} path="/">
            <Route element={<Register />} path="/" />
            <Route element={<Login />} path="/login" />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default PublicRoutes;
