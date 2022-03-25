import React from 'react';
import {
  TOGGLE_OPEN_MENU,
  TOGGLE_CLOSE_MENU
} from '../../constants/actionTypes';

const toggleReducers = (state: boolean, action: { type: string }) => {
  switch (action.type) {
    case TOGGLE_OPEN_MENU:
      return true;
    case TOGGLE_CLOSE_MENU:
      return true;
    default:
      return state;
  }
};

const toggleReducer = () => {
  const [toggle, toggleDispatch] = React.useReducer(toggleReducers, false);

  return {
    toggle,
    toggleDispatch
  };
};

export default toggleReducer;
