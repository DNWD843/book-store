import { errorMessages, passwordLength } from '../constants';
import { TAuthFormValues } from '../types';

export const email = (value: TAuthFormValues['password']) => {
  if (!value) {
    return errorMessages.required;
  }

  if (!/^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i.test(value)) {
    return errorMessages.incorrectEmail;
  }
};

export const password = (value: TAuthFormValues['password']) => {
  if (!value) {
    return errorMessages.required;
  }

  if (value.length < passwordLength.min) {
    return errorMessages.passwordMinLength;
  }

  if (value.length > passwordLength.max) {
    return errorMessages.passwordMaxLength;
  }

  if (/\W/i.test(value)) {
    return errorMessages.lettersAndDigitsOnlyAreRequired;
  }
};
