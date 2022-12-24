import { errorMessages } from '../constants';
import { EPasswordLength } from '../enums/auth';
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

  if (value.length < EPasswordLength.min) {
    return errorMessages.minLengthIsRequired;
  }

  if (value.length > EPasswordLength.max) {
    return errorMessages.maxLengthIsRequired;
  }

  if (/\W/gi.test(value)) {
    return errorMessages.lettersAndDigitsOnlyAreRequired;
  }
};
