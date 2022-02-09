import { createContext } from 'react';

const Context = createContext<any>({
  data: [],
  dispatch: () => {
    return undefined;
  }
});

export default Context;
