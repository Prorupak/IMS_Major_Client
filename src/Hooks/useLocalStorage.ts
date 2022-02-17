import React from 'react';

const useLocalStorage = (key: string, initValue: any) => {
  const [state, setState] = React.useState(
    JSON.parse(localStorage.getItem(key)!) || initValue
  );

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, setState]);

  return [state, setState];
};

export default useLocalStorage;
