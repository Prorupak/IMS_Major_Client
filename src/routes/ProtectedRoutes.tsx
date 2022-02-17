import { AnimatePresence } from 'framer-motion';
import Categories from 'Pages/Categories/Categories';
import Dashboard from 'Pages/Dashboard/Dashboard';
import Products from 'Pages/Products/Products';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router';
import RequireAuth from './RequireAuth';

const PublicRoutes = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter initial>
        <Routes key={location.pathname} location={location}>
          <Route element={<RequireAuth />}>
            <Route element={<Dashboard />} path="/dash" />
            <Route element={<Categories />} path="/categories" />
            <Route element={<Products />} path="/products" />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default PublicRoutes;
