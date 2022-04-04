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
import { ProductProvider } from 'context/ProductContext';
import { Alert, Spin } from 'antd';
import { Loader } from 'Themes/utilityThemes';

const App = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader>
          <Spin size="large" tip="Please Wait....." />
        </Loader>
      ) : (
        <SnackbarProvider maxSnack={3}>
          <AuthProvider>
            <CategoryProvider>
              <ProductProvider>
                <ToggleProvider>
                  <PublicRoutes />
                  <Layout>
                    <ProtectedRoutes />
                  </Layout>
                </ToggleProvider>
              </ProductProvider>
            </CategoryProvider>
          </AuthProvider>
        </SnackbarProvider>
      )}
    </>
  );
};
export default App;














