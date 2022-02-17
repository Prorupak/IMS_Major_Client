import useLocalStorage from 'Hooks/useLocalStorage';
import React from 'react';

export const ToggleContext = React.createContext<any>(null);

// provide a stored toggle state to global context

const useToggle = (key: any, initValue: boolean) => {
  const [value, setValue] = useLocalStorage(key, initValue);

  const toggleHandle = (action: string) => {
    setValue((prev: any) => {
      return typeof action === 'boolean' ? action : !prev;
    });
  };

  return [value, toggleHandle];
};

export const ToggleProvider = (props: any) => {
  const { children } = props;
  const [value, toggleHandle] = useToggle('toggle', false);

  console.log('value===>', value);

  return (
    <ToggleContext.Provider value={{ value, toggleHandle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default useToggle;
