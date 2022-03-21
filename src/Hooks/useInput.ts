import React from 'react';
import useLocalStorage from 'Hooks/useLocalStorage';
import validation from 'validation/validation';
import {
  EMAIL_REGEX,
  NAME_REGEX,
  PASSWORD_REGEX,
  PHONE_REGEX
} from 'validation/formRegex';
import useSessionStorage from './useSessionStorage';

type TUseInput = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
};

export const useInput = (initValue: any) => {
  const [value, setValue] = React.useState<any>(initValue);
  const [focused, setFocused] = React.useState<boolean>(false);
  const resetHandle = () => setValue(initValue);

  console.log('useInput', value);

  const inputAttrs: TUseInput = {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  };

  return {
    value,
    setValue,
    focused,
    resetHandle,
    inputAttrs
  };
};

export const useInputSession = (key: string, initValue: any) => {
  const [value, setValue] = useSessionStorage(key, initValue);
  const [focused, setFocused] = React.useState<boolean>(false);
  const resetHandle = () => setValue('');

  const inputAttrs: TUseInput = {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  };

  return {
    value,
    setValue,
    resetHandle,
    inputAttrs
  };
};
