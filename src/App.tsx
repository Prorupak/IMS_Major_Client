/* eslint-disable import/no-unresolved */
import React from 'react';
import { ToggleProvider } from 'Hooks/useToggle';
import PublicRoutes from 'routes/PublicRoutes';
import ProtectedRoutes from 'routes/ProtectedRoutes';
// import Missing from 'Pages/404NotFound/Missing';
import AuthProvider from 'HOC/WithAuth';
import { SnackbarProvider } from 'notistack';
import Layout from 'layout/Layout';
import { CategoryProvider } from 'context/CategoryContext';

const App = () => {
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <AuthProvider>
          <CategoryProvider>
            <ToggleProvider>
              <PublicRoutes />
              <Layout>
                <ProtectedRoutes />
              </Layout>
            </ToggleProvider>
          </CategoryProvider>
        </AuthProvider>
      </SnackbarProvider>
    </>
  );
};
export default App;




