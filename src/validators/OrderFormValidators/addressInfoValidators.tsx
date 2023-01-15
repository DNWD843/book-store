import { validationErrorMessages, POSTAL_CODE_LENGTH } from '../../constants';
import { TOrderFormValues } from '../../types';

export const postalCodeValidator = (value: TOrderFormValues['postalCode']) => {
  if (!value) return validationErrorMessages.required;

  if (/\D/i.test(value)) return validationErrorMessages.digitsOnlyAreRequired;

  if (value.length && value.length !== POSTAL_CODE_LENGTH) return validationErrorMessages.postalCodeLength;
};

export const addressLiteralValidator = (value: string) => {
  if (!value) return validationErrorMessages.required;

  if (/[^a-zа-я-\s]/i.test(value)) return validationErrorMessages.incorrectValue;
};

export const addressNumberValidator = (value: string) => {
  if (!value) return validationErrorMessages.required;

  if (/[^a-zа-я-\d\s]/i.test(value)) return validationErrorMessages.incorrectValue;
};

export const notRequiredAddressNumberValidator = (value: string) => {
  if (!value) return;

  if (/[^a-zа-я-\d\s]/i.test(value)) return validationErrorMessages.incorrectValue;
};
