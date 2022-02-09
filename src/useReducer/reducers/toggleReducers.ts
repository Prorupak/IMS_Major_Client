import React from 'react';
import {
  TOGGLE_OPEN_MENU,
  TOGGLE_CLOSE_MENU
} from '../../constants/actionTypes';
import { TToggleAction } from '../action/toggleAction';

type initialStateType = {
  toggleClose: boolean;
  toggleOpen: boolean;
};

const initialState: initialStateType = {
  toggleClose: false,
  toggleOpen: true
};

const toggleReducers = (state: typeof initialState, action: TToggleAction) => {
  if (action.type === TOGGLE_OPEN_MENU) {
    return {
      ...state,
      toggleClose: false,
      toggleOpen: true
    };
  }
  if (action.type === TOGGLE_CLOSE_MENU) {
    return {
      ...state,
      toggleClose: true,
      toggleOpen: false
    };
  }
  return state;
};

const toggleReducer = () => {
  const [toggle, toggleDispatch] = React.useReducer(
    toggleReducers,
    initialState
  );

  return {
    toggle,
    toggleDispatch
  };
};

export default toggleReducer;
