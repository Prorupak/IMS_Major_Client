import React from 'react';

const validation = (regex: any, value: string) => {
  const [valid, setValid] = React.useState(false);

  React.useEffect(() => {
    setValid(regex.test(value));
  }, [value]);

  const handleVal = (jValue: string, errMsg: any, jRegex?: RegExp) => {
    const v = jRegex!.test(jValue);
    if (!v) {
      errMsg('Please enter a valid Entry');
    }
  };

  return {
    valid,
    handleVal
  };
};

export default validation;

export const loginVal = (value: string) => {
  const [valid, setValid] = React.useState(false);

  React.useEffect(() => {
    console.log('loginVal', value);
    setValid(value.length > 0);
  }, [value]);

  return { valid };
};
