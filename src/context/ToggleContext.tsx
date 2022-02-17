import React from 'react';
import { toggleReducers } from '../reducers';

export const ToggleContext = React.createContext<any>({});

type IProps = {
  children: React.ReactNode;
};

export const ToggleProvider: React.FC<IProps> = ({ children }) => {
  const { toggle, toggleDispatch } = toggleReducers();
  return (
    <>
      <ToggleContext.Provider value={{ toggle, toggleDispatch }}>
        {children}
      </ToggleContext.Provider>
    </>
  );
};
