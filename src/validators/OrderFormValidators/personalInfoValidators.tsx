import { validationErrorMessages } from '../../constants';
import { TOrderFormValues } from '../../types';

export const personalInfoValidator = (value: TOrderFormValues['firstName'] | TOrderFormValues['lastName']) => {
  if (!value) return validationErrorMessages.required;

  if (/[^a-zа-я-]/i.test(value)) return validationErrorMessages.lettersOnlyAreRequired;
};
