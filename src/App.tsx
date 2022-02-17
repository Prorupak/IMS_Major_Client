/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToggleProvider } from 'Hooks/useToggle';
import PublicRoutes from 'routes/PublicRoutes';
import ProtectedRoutes from 'routes/ProtectedRoutes';
// import Missing from 'Pages/404NotFound/Missing';
import AuthProvider from 'HOC/WithAuth';

const App = () => {
  return (
    <>
      <AuthProvider>
        <ToggleProvider>
          <Router>
            <PublicRoutes />
            <ProtectedRoutes />
            <Routes />
          </Router>
        </ToggleProvider>
      </AuthProvider>
    </>
  );
};
export default App;
