import { errorMessages } from '../../constants';
import { TOrderFormValues } from '../../types';

export const validateSendingType = (value: TOrderFormValues['sendingType']) => {
  if (!value) return errorMessages.sendingTypeIsRequired;
};
