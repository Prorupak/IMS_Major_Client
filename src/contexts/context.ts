import { createContext } from 'react';
// import { TCategoryAction } from '../useReducer/action/categoriesAction';
// import { ICategories } from '../Interfaces/Interfaces';

// type initialStateType = {
//   category: ICategories[] | null;
// };

const CategoryContext = createContext<any>({
  category: [],
  categoryDispatch: () => {
    return undefined;
  }
});

export default CategoryContext;
