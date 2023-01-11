import { emailRegExp, phoneNumberRegExp, validationErrorMessages } from '../constants';

export const profileEmailValidator = (value: string) => {
  if (value && !emailRegExp.test(value)) return validationErrorMessages.incorrectEmail;
};

export const profilePhoneNumberValidator = (value: string) => {
  if (!phoneNumberRegExp.test(value)) return validationErrorMessages.incorrectPhoneNumber;
};
