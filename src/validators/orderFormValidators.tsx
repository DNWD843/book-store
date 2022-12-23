import { FieldState } from 'final-form';

import { ESendingTypes } from '../enums';
import { TOrderFormValues } from '../types';

export const validateSendingType = (value: TOrderFormValues['sendingType'], allValues?: Object, meta?: FieldState<ESendingTypes>) => {
  if (!meta?.visited) return 'Выберите способ доставки';
};
