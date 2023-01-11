import { ORDER_FORM_ID } from '../../../constants';
import { EContactInfoFieldsNames } from '../../../enums';
import { IFieldConfig } from '../../../types';
import { createFormFieldId } from '../../../utils';
import { orderFormEmailValidator, orderFormPhoneNumberValidator } from '../../../validators';

import { orderFormInputsConfig } from './orderFormInputsConfig';

type TContactInfoFieldsConfig = Record<keyof typeof EContactInfoFieldsNames, IFieldConfig>;

const normalizePhone = (value: string) => {
  if (!value) return value;

  const onlyNums = value.replace(/[^\d]/g, '');

  if (onlyNums.length <= 3) return onlyNums.replace(onlyNums[0], '+7 (');
  if (onlyNums.length > 3 && onlyNums.length <= 7) return `+7 (${onlyNums.slice(1, 4)}) ${onlyNums.slice(4, 7)}`;
  return `+7 (${onlyNums.slice(1, 4)}) ${onlyNums.slice(4, 7)}-${onlyNums.slice(7, 11)}`;
};

export const contactInfoFieldsConfig: TContactInfoFieldsConfig = {
  email: {
    id: createFormFieldId(ORDER_FORM_ID, orderFormInputsConfig.email.name),
    name: orderFormInputsConfig.email.name,
    validate: orderFormEmailValidator,
    InputProps: {
      inputElementProps: {
        id: orderFormInputsConfig.email.name,
        placeholder: orderFormInputsConfig.email.placeholder,
      },
      label: orderFormInputsConfig.email.label,
    },
  },
  phoneNumber: {
    id: createFormFieldId(ORDER_FORM_ID, orderFormInputsConfig.phoneNumber.name),
    name: orderFormInputsConfig.phoneNumber.name,
    validate: orderFormPhoneNumberValidator,
    parse: normalizePhone,
    InputProps: {
      inputElementProps: {
        id: orderFormInputsConfig.phoneNumber.label,
        placeholder: orderFormInputsConfig.phoneNumber.placeholder,
      },
      label: orderFormInputsConfig.phoneNumber.label,
    },
  },
};
