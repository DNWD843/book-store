import { validationErrorMessages } from '../../constants';
import { TOrderFormValues } from '../../types';

export const validateSendingType = (value: TOrderFormValues['sendingType']) => {
  if (!value) return validationErrorMessages.sendingTypeIsRequired;
};
