import { emailRegExp, phoneNumberRegExp, urlRegExp, validationErrorMessages } from '../constants';

export const profileEmailValidator = (value: string) => {
  if (!value) return validationErrorMessages.required;

  if (value && !emailRegExp.test(value)) return validationErrorMessages.incorrectEmail;
};

export const profilePhoneNumberValidator = (value: string) => {
  if (!value) return;

  if (!phoneNumberRegExp.test(value)) return validationErrorMessages.incorrectPhoneNumber;
};

export const profileUrlValidator = (value: string) => {
  if (!value) return;

  if (!urlRegExp.test(value)) return validationErrorMessages.incorrectURL;
};
