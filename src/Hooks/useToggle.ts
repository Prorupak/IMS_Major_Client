// custom hook for toggling menus
import React from 'react';
import { TOGGLE_OPEN_MENU, TOGGLE_CLOSE_MENU } from '../constants/actionTypes';

const useToggle = (value: boolean) => {
  const [toggle, toggleDispatch] = React.useReducer(
    (state: boolean, action: { type: string }) => {
      switch (action.type) {
        case TOGGLE_OPEN_MENU:
          return true;
        case TOGGLE_CLOSE_MENU:
          return false;
        default:
          return state;
      }
    },
    value
  );

  const handleClose = () => {
    toggleDispatch({ type: TOGGLE_CLOSE_MENU });
  };

  const handleOpen = () => {
    toggleDispatch({ type: TOGGLE_OPEN_MENU });
  };

  return {
    toggle,
    handleClose,
    handleOpen
  };
};

export default useToggle;
