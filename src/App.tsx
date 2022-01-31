/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from 'Pages/Categories/Categories';
import Dashboard from './Pages/Dashboard/Dashboard';
import FormRegistration from './Pages/register/FormRegistration';
// import Login from './Components/login/Login';
import Navbar from './Components/main/Navbar/Navbar';
import Login from './Pages/login/Login';
import Products from './Pages/Products/Products';
import Test from './layout/sidebar/Test';

const App = () => {
  // function PrivateRoute({ children }) {
  //   const isLoggedIn = localStorage.getItem('be_token');
  //   const navigate = useNavigate();
  //   return isLoggedIn ? children : navigate('/login');
  // }

  // function Private() {
  //   return (
  //     <>
  //       <p>heelo</p>
  //     </>
  //   )
  // }
  return (
    <>
      <Router>
        <Routes>
          {/* <Route
            element={(
              <PrivateRoute>
                <Private />
              </PrivateRoute>
            )}
            path="/"
          /> */}
          <Route element={<Dashboard />} path="/dash" />
          <Route element={<FormRegistration />} path="/form" />
          <Route element={<Login />} path="login" />
          <Route element={<Navbar />} path="/nav" />
          <Route element={<Test />} path="/test" />
          <Route element={<Categories />} path="/user" />
          <Route element={<Products />} path="/" />
        </Routes>
      </Router>
    </>
  );
};
export default App;
