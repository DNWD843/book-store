import { errorMessages, POSTAL_CODE_LENGTH } from '../../constants';
import { TOrderFormValues } from '../../types';

export const postalCodeValidator = (value: TOrderFormValues['postalCode']) => {
  if (!value) return errorMessages.required;

  if (/\D/gi.test(value)) return errorMessages.digitsOnlyAreRequired;

  if (value.length && value.length !== POSTAL_CODE_LENGTH) return errorMessages.postalCodeLength;
};
