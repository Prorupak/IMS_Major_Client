// import validator from 'validator';

export default function ValidateInfo(values: any) {
  const errors = {
    email: '',
    password: '',
    name: ''
  };

  // check if name is empty
  if (!values.name) {
    errors.name = 'Name is required';
  }
  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }
  return errors;
}
