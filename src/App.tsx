/* eslint-disable import/no-unresolved */
import React from 'react';
import { ToggleProvider } from 'Hooks/useToggle';
import PublicRoutes from 'routes/PublicRoutes';
import ProtectedRoutes from 'routes/ProtectedRoutes';
// import Missing from 'Pages/404NotFound/Missing';
import AuthProvider from 'HOC/WithAuth';
import Layout from 'layout/Layout';

const App = () => {
  return (
    <>
      <AuthProvider>
        <ToggleProvider>
          <Layout>
            <PublicRoutes />
            <ProtectedRoutes />
          </Layout>
        </ToggleProvider>
      </AuthProvider>
    </>
  );
};
export default App;
