import { AnimatePresence } from 'framer-motion';
import Categories from 'Pages/Categories/Categories';
import AddCategories from 'Pages/Categories/AddCategories';
import Dashboard from 'Pages/Dashboard/Dashboard';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router';
import Layout from 'layout/Layout';
import CategoryContainer from 'Pages/Categories/CategoryContainer';
import Items from 'layout/Items';
import QuickCreate from 'Components/main/Navbar/QuickCreate/QuickCreate';
import AddProducts from 'Pages/Products/AddProducts';
import CreateProducts from 'Pages/Products/CreateProducts';
import Products from 'Pages/Products/Components/productDetails/Products';
import CategoryForm from 'Pages/Categories/CategoryForm';
import RequireAuth from './RequireAuth';
import ProductsForm from 'Pages/Products/ProductsForm';
import ProductContainer from 'Pages/Products/ProductContainer';
import { ProductData } from 'context/ProductContext';
import UpdateCategories from 'Pages/Categories/UpdateCategories';
import CustomerContainer from 'layout/CustomerContainer';
import AddCustomer from 'Pages/customer/AddCustomer';
import Customers from 'Pages/customer/Customers';

const PublicRoutes = () => {
  const { product } = React.useContext(ProductData)
  const location = useLocation();
  const id = localStorage.getItem('saveId');
  React.useEffect(() => {
    if (id) {
      sessionStorage.setItem('saveId', id);
    }
  }, [id]);

  setTimeout(() => {
    if (id) {
      sessionStorage.removeItem('saveId');
    }
  }, 1000);

  const ids = sessionStorage.getItem('saveId');
  return (
    <>
      <AnimatePresence exitBeforeEnter initial>
        <Routes key={location.pathname} location={location}>
          <Route element={<RequireAuth />}>
            <Route element={<ProductContainer />} path="/product">
              <Route element={<ProductsForm />} path=":id" />
            </Route>
            <Route element={<CreateProducts />} path="/create" />
            <Route element={<CategoryContainer />} path="/category">
              <Route element={<CategoryForm />} path="add" />
              <Route element={<UpdateCategories />} path="edit/:id" />
            </Route>
            <Route element={<Categories />} path="/details" />
            <Route element={<Products />} path="/products" />
            <Route element={<Customers />} path="/customers" />

            <Route element={<CustomerContainer />} path="/customer" >
              <Route element={<AddCustomer />} path="add" />
            </Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default PublicRoutes;
















