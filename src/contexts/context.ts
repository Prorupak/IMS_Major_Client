import { createContext } from 'react';
// import { TCategoryAction } from '../useReducer/action/categoriesAction';
// import { ICategories } from '../Interfaces/Interfaces';

// type initialStateType = {
//   category: ICategories[] | null;
// };

const Context = createContext<any>({
  data: [],
  dispatch: () => {
    return undefined;
  }
});

export default Context;
