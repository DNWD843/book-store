import { errorMessages, POSTAL_CODE_LENGTH } from '../../constants';
import { TOrderFormValues } from '../../types';

export const postalCodeValidator = (value: TOrderFormValues['postalCode']) => {
  if (!value) return errorMessages.required;

  if (/\D/i.test(value)) return errorMessages.digitsOnlyAreRequired;

  if (value.length && value.length !== POSTAL_CODE_LENGTH) return errorMessages.postalCodeLength;
};

export const addressLiteralValidator = (value: string) => {
  if (!value) return errorMessages.required;

  if (/[^a-zа-я-\s]/i.test(value)) return errorMessages.incorrectValue;
};

export const addressNumberValidator = (value: string) => {
  if (!value) return errorMessages.required;

  if (/[^a-zа-я-\d\s]/i.test(value)) return errorMessages.incorrectValue;
};

export const notRequiredAddressNumberValidator = (value: string) => {
  if (!value) return;

  if (/[^a-zа-я-\d\s]/i.test(value)) return errorMessages.incorrectValue;
};
