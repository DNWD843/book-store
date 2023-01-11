import { emailRegExp, phoneNumberRegExp, validationErrorMessages } from '../constants';

export const profileEmailValidator = (value: string) => {
  if (!value) return;

  if (value && !emailRegExp.test(value)) return validationErrorMessages.incorrectEmail;
};

export const profilePhoneNumberValidator = (value: string) => {
  if (!value) return;

  if (!phoneNumberRegExp.test(value)) return validationErrorMessages.incorrectPhoneNumber;
};
