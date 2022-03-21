import React from 'react';

interface TUnitOptions {
  inputValue?: string;
  item: string;
}

const useArrToObj = (meth: any) => {
  const uniq: readonly TUnitOptions[] = meth.reduce((acc: any, cur: any) => {
    if (!acc.some((item: any) => item.unit === cur)) {
      acc.push({ unit: cur });
    }
    return acc;
  }, []);
  return uniq;
};

export default useArrToObj;
