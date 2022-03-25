export const NAME_REGEX = RegExp(/^[A-z][A-z0-9-_]{3,23}$/);
export const EMAIL_REGEX = RegExp(/^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,}$/);
export const PASSWORD_REGEX = RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-zA-Z\d@$!%*?&]{8,12}$/
);
export const PHONE_REGEX = RegExp(/^[0-9]{10}$/);
