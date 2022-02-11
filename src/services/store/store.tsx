import React from 'react';

const Store = React.createContext({});
Store.displayName = 'store';

export const useStore = () => {
  return React.useContext(Store);
};

type IProps = {
  children: React.ReactNode;
};

export const StoreProvider: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Store.Provider value={{}}>{children}</Store.Provider>
    </>
  );
};
