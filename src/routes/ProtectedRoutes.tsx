/* eslint-disable react/jsx-wrap-multilines */
import { AnimatePresence } from 'framer-motion';
import Categories from 'Pages/Categories/Categories';
import AddCategories from 'Pages/Categories/AddCategories';
import Dashboard from 'Pages/Dashboard/Dashboard';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router';
import Layout from 'layout/Layout';
import CategoryContainer from 'Pages/Categories/CategoryContainer';
import Items from 'layout/Items';
import RequireAuth from './RequireAuth';

const PublicRoutes = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter initial>
        <Routes key={location.pathname} location={location}>
          <Route element={<RequireAuth />}>
            <Route element={<CategoryContainer />} path="/category">
              <Route element={<Categories />} path="category" />
            </Route>
            <Route element={<AddCategories />} path="/category/add" />
            <Route element={<CategoryContainer />} />
          </Route>
          <Route element={<Categories />} path="/details" />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default PublicRoutes;
