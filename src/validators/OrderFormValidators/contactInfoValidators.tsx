import { FieldState } from 'final-form';

import { emailRegExp, errorMessages, phoneNumberRegExp } from '../../constants';
import { ESendingTypes, orderFormFieldsNames } from '../../enums';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const orderFormEmailValidator = (value: string, allValues?: Object, meta?: FieldState<string>) => {
  // @ts-ignore
  if (!allValues?.[orderFormFieldsNames.sendingType]) return;

  // @ts-ignore
  if (!value && allValues?.[orderFormFieldsNames.sendingType] === ESendingTypes.email) return errorMessages.required;

  if (value && !emailRegExp.test(value)) return errorMessages.incorrectEmail;
};

export const phoneNumberValidator = (value: string) => {
  if (!value) return errorMessages.required;

  if (!phoneNumberRegExp.test(value)) return errorMessages.incorrectPhoneNumber;
};
