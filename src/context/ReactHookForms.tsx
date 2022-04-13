import axios from 'axios';
import { useForm, Controller, NestedValue } from 'react-hook-form';
import React from 'react';
import { ProductData } from './ProductContext';

export const ReactHookForm = React.createContext<any>({});

type IProps = {
     children: React.ReactNode;
};



const useReactHook = ({ initValue }: any) => {
     console.log('initValue', initValue);
     const [value, setValues] = React.useState(initValue);
     const { product: products } = React.useContext(ProductData);

     const [modeS, setMode] = React.useState();
     console.log('form', products);
     const { register, handleSubmit, formState: { errors }, setValue, getValues, control, watch, resetField, reset, setFocus, formState } = useForm<any>({
          mode: 'onChange',
     });
     const test = "test";
     return { register, handleSubmit, setMode, formState, setFocus, errors, reset, setValue, getValues, control, setValues, watch, test, resetField };
}

export default useReactHook;

export const ReactFormProvider: React.FC<IProps> = ({ children }) => {
     const { register, handleSubmit, formState, errors, setFocus, reset, setValue, setMode, getValues, setValues, control, watch, test, resetField } = useReactHook({});
     return (
          <>
               <ReactHookForm.Provider value={{
                    register,
                    formState,
                    handleSubmit,
                    setMode,
                    errors,
                    setFocus,
                    reset,
                    setValue,
                    getValues,
                    Controller,
                    control,
                    setValues,
                    watch,
                    test

               }}>
                    {children}
               </ReactHookForm.Provider>
          </>
     );
};

