import { TOrderFormValues } from '../../types';

export const validateSendingType = (value: TOrderFormValues['sendingType']) => {
  if (!value) return 'Выберите способ доставки';
};
