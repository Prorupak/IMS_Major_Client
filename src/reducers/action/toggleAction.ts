import {
  TOGGLE_OPEN_MENU,
  TOGGLE_CLOSE_MENU
} from '../../constants/actionTypes';

const toggleMenuOpen = (bol: boolean) => {
  return <const>{
    type: TOGGLE_OPEN_MENU,
    payload: bol
  };
};

const toggleMenuClose = (bol: boolean) => {
  return <const>{
    type: TOGGLE_CLOSE_MENU,
    payload: bol
  };
};

export type TToggleAction =
  | ReturnType<typeof toggleMenuOpen>
  | ReturnType<typeof toggleMenuClose>;

export default {
  toggleMenuClose,
  toggleMenuOpen
};
