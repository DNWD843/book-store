import { errorMessages } from '../../constants';
import { TOrderFormValues } from '../../types';

export const personalInfoValidator = (value: TOrderFormValues['firstName'] | TOrderFormValues['lastName']) => {
  if (!value) return errorMessages.required;

  if (/[^a-zа-я]/ig.test(value)) return errorMessages.lettersOnlyAreRequired;
};
