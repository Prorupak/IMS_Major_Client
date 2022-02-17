import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { IRegister } from '../Interfaces/Interfaces';

// set USER_REGEX  to object

const USER_REGEX = RegExp(/^[A-z][A-z0-9-_]{3,23}$/);
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const useRegister = () => {
  // set useRef to nameRef
  const nameRef = useRef<HTMLInputElement>({} as HTMLInputElement);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      country: '',
      phone: ''
    }
  });

  const onSubmit = (data: any) => {
    console.log('data===>', data);
  };
  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    setValue,
    nameRef,
    USER_REGEX
  };
};

export default useRegister;
