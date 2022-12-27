import { ORDER_FORM_ID } from '../../../../constants';
import { EContactInfoFieldsNames } from '../../../../enums';
import { IFieldConfig } from '../../../../types';
import { createFormFieldId } from '../../../../utils';
import { orderFormEmailValidator, phoneNumberValidator } from '../../../../validators';
import { orderFormFieldsConfig } from '../../orderFormFieldsConfig';

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
    id: createFormFieldId(ORDER_FORM_ID, orderFormFieldsConfig.email.name),
    name: orderFormFieldsConfig.email.name,
    validate: orderFormEmailValidator,
    InputProps: {
      inputElementProps: {
        id: orderFormFieldsConfig.email.name,
        placeholder: orderFormFieldsConfig.email.placeholder,
      },
      label: orderFormFieldsConfig.email.label,
    },
  },
  phoneNumber: {
    id: createFormFieldId(ORDER_FORM_ID, orderFormFieldsConfig.phoneNumber.name),
    name: orderFormFieldsConfig.phoneNumber.name,
    validate: phoneNumberValidator,
    parse: normalizePhone,
    InputProps: {
      inputElementProps: {
        id: orderFormFieldsConfig.phoneNumber.label,
        placeholder: orderFormFieldsConfig.phoneNumber.placeholder,
      },
      label: orderFormFieldsConfig.phoneNumber.label,
    },
  },
};
