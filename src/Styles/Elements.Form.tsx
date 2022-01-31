import styled from 'styled-components';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 59%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const FormInputs = styled.div``;

export const Name = styled(TextField).attrs({
  defaultValue: '',
  id: 'outlined-size-small',
  label: 'Full Name',
  name: 'name',
  size: 'medium',
  type: 'text'
})`
  width: 400px;
`;
export const Email = styled(TextField).attrs({
  defaultValue: '',
  id: 'outlined-size-small',
  label: 'Email',
  name: 'email',
  size: 'medium',
  type: 'email'
})`
  width: 400px;
`;
export const Password = styled(TextField).attrs({
  defaultValue: '',
  id: 'outlined-size-small',
  label: 'Password',
  name: 'password',
  size: 'medium',
  type: 'password'
})`
  width: 400px;
`;

export const Submit = styled(Button)`
  width: 400px;
  /* background-color: #0b773c; */
`;
