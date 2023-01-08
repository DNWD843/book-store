import { emailRegExp, validationErrorMessages, passwordLength } from '../constants';
import { TAuthFormValues } from '../types';

export const authEmail = (value: TAuthFormValues['password']) => {
  if (!value) return validationErrorMessages.required;

  if (!emailRegExp.test(value)) return validationErrorMessages.incorrectEmail;
};

export const authPassword = (value: TAuthFormValues['password']) => {
  if (!value) return validationErrorMessages.required;

  if (value.length < passwordLength.min) return validationErrorMessages.passwordMinLength;

  if (value.length > passwordLength.max) return validationErrorMessages.passwordMaxLength;

  if (/\W/i.test(value)) return validationErrorMessages.lettersAndDigitsOnlyAreRequired;
};
