import React from 'react';
import useLocalStorage from 'Hooks/useLocalStorage';
import validation from 'validation/validation';
import {
  EMAIL_REGEX,
  NAME_REGEX,
  PASSWORD_REGEX,
  PHONE_REGEX
} from 'validation/formRegex';

type TUseInput = {
  value: string;
  focused: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
};

const useInput = (initValue: string) => {
  const [value, setValue] = React.useState(initValue);
  const [focused, setFocused] = React.useState<boolean>(false);
  const resetHandle = () => setValue(initValue);

  const inputAttrs: TUseInput = {
    value,
    focused,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  };

  return {
    value,
    resetHandle,
    inputAttrs
  };
};

export default useInput;
