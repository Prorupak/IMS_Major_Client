import axios from 'axios';
import { useForm, Controller, NestedValue } from 'react-hook-form';
import React from 'react';

export const ReactHookForm = React.createContext<any>({});

type IProps = {
     children: React.ReactNode;
};

type FormValues = {
     // autocomplete: NestedValue<Option[]>;
     select: NestedValue<number[]>;
};

const useReactHook = ({ initValue }: any) => {
     const [value, setValues] = React.useState([initValue]);
     console.log('value===>', value);
     const { register, handleSubmit, formState: { errors }, setValue, getValues, control, watch } = useForm<FormValues | any>({
          defaultValues: value
     });
     return { register, handleSubmit, errors, setValue, getValues, control, setValues, watch };
}

export default useReactHook;

export const ReactFormProvider: React.FC<IProps> = ({ children }) => {
     const { register, handleSubmit, errors, setValue, getValues, setValues, control, watch } = useReactHook({});
     return (
          <>
               <ReactHookForm.Provider value={{
                    register,
                    handleSubmit,
                    errors,
                    setValue,
                    getValues,
                    Controller,
                    control,
                    setValues,
                    watch

               }}>
                    {children}
               </ReactHookForm.Provider>
          </>
     );
};

