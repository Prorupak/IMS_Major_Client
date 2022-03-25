import React from 'react';

const useSessionStorage = (key: string, initValue: any) => {
  const [state, setState] = React.useState(
    JSON.parse(sessionStorage.getItem(key)!) || initValue
  );

  React.useEffect(() => {
    // clear the session storage if the component is unmounted
    sessionStorage.setItem(key, JSON.stringify(state));
    return () => {
      sessionStorage.removeItem(key);
    };
  }, [key, state, setState]);
  return [state, setState];
};

export default useSessionStorage;
