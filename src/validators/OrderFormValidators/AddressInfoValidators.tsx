import { errorMessages } from '../../constants';
import { TOrderFormValues } from '../../types';

export const postalCodeValidator = (value: TOrderFormValues['postalCode']) => {
  if (!value) return errorMessages.required;
};
