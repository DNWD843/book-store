import { errorMessages } from '../constants';

export const lettersOnlyValidator = (value: string) => {
  if (!value) return errorMessages.required;

  if (/[^a-zа-я]/gi.test(value)) return errorMessages.lettersOnlyAreRequired;
};
