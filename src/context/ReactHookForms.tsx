import axios from 'axios';
import { useForm, Controller, NestedValue } from 'react-hook-form';
import React from 'react';

export const ReactHookForm = React.createContext<any>({});

type IProps = {
     children: React.ReactNode;
};



const useReactHook = ({ initValue }: any) => {
     const [value, setValues] = React.useState();

     const [modeS, setMode] = React.useState();
     console.log('value', value);
     const { register, handleSubmit, formState: { errors }, setValue, getValues, control, watch, resetField, reset } = useForm<any>({
          mode: 'onBlur',
     });
     const test = "test";
     return { register, handleSubmit, setMode, errors, reset, setValue, getValues, control, setValues, watch, test, resetField };
}

export default useReactHook;

export const ReactFormProvider: React.FC<IProps> = ({ children }) => {
     const { register, handleSubmit, errors, reset, setValue, setMode, getValues, setValues, control, watch, test, resetField } = useReactHook({});
     return (
          <>
               <ReactHookForm.Provider value={{
                    register,
                    handleSubmit,
                    setMode,
                    errors,
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

