import { emailRegExp, errorMessages, phoneNumberRegExp } from '../../constants';

export const orderFormEmailValidator = (value: string) => {
  if (!value) return;

  if (!emailRegExp.test(value)) return errorMessages.incorrectEmail;
};

export const phoneNumberValidator = (value: string) => {
  if (!value) return errorMessages.required;

  if (!phoneNumberRegExp.test(value)) return errorMessages.incorrectPhoneNumber;
};
