import { createContext } from 'react';

const ToggleMenuContext = createContext<any>({
  toggle: true,
  toggleDispatch: () => {}
});

export default ToggleMenuContext;
