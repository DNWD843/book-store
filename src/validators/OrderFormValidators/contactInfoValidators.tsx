import { FieldState } from 'final-form';

import { emailRegExp, validationErrorMessages, phoneNumberRegExp } from '../../constants';
import { ESendingTypes, orderFormFieldsNames } from '../../enums';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const orderFormEmailValidator = (value: string, allValues?: Object, meta?: FieldState<string>) => {
  // @ts-ignore
  if (!allValues?.[orderFormFieldsNames.sendingType]) return;

  // @ts-ignore
  if (!value && allValues?.[orderFormFieldsNames.sendingType] === ESendingTypes.email) return validationErrorMessages.required;

  if (value && !emailRegExp.test(value)) return validationErrorMessages.incorrectEmail;
};

export const orderFormPhoneNumberValidator = (value: string) => {
  if (!value) return validationErrorMessages.required;

  if (!phoneNumberRegExp.test(value)) return validationErrorMessages.incorrectPhoneNumber;
};
