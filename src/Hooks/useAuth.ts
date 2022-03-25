import { AuthContext } from 'HOC/WithAuth';
import React from 'react';

const useAuth = () => {
  return React.useContext(AuthContext);
};

export default useAuth;
