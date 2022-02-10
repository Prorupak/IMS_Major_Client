// custom hook for toggling menus
import React from 'react';
import ToggleMenuContext from '../contexts/ToggleMenuContext';
import { TOGGLE_OPEN_MENU, TOGGLE_CLOSE_MENU } from '../constants/actionTypes';

const useToggle = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { toggle, toggleDispatch } = React.useContext(ToggleMenuContext);
  // const [toggle, toggleDispatch] = React.useReducer(
  //   (state: boolean, action: { type: string }) => {
  //     switch (action.type) {
  //       case TOGGLE_OPEN_MENU:
  //         return true;
  //       case TOGGLE_CLOSE_MENU:
  //         return true;
  //       default:
  //         return state;
  //     }
  //   },
  //   false
  // );

  const handleClose = () => {
    toggleDispatch({ type: TOGGLE_CLOSE_MENU });
  };

  const handleOpenMain = () => {
    setIsOpen(toggleDispatch({ type: TOGGLE_OPEN_MENU }));
  };

  const handleOpen = () => {
    toggleDispatch({ type: TOGGLE_OPEN_MENU });
  };

  return {
    isOpen,
    handleOpenMain,
    toggle,
    handleClose,
    handleOpen
  };
};

export default useToggle;
