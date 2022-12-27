import { emailRegExp, errorMessages, passwordLength } from '../constants';
import { TAuthFormValues } from '../types';

export const authEmail = (value: TAuthFormValues['password']) => {
  if (!value) return errorMessages.required;

  if (!emailRegExp.test(value)) return errorMessages.incorrectEmail;
};

export const authPassword = (value: TAuthFormValues['password']) => {
  if (!value) return errorMessages.required;

  if (value.length < passwordLength.min) return errorMessages.passwordMinLength;

  if (value.length > passwordLength.max) return errorMessages.passwordMaxLength;

  if (/\W/i.test(value)) return errorMessages.lettersAndDigitsOnlyAreRequired;
};
