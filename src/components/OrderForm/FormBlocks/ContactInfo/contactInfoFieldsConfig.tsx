import { EContactInfoFieldsNames } from '../../../../enums';
import { TFieldConfig } from '../../../../types';
import { createFormFieldId } from '../../../../utils';
import { FORM_ID, orderFormFieldsConfig } from '../../orderFormFieldsConfig';

type TContactInfoFieldsConfig = Record<keyof typeof EContactInfoFieldsNames, TFieldConfig>;

export const contactInfoFieldsConfig: TContactInfoFieldsConfig = {
  email: {
    id: createFormFieldId(FORM_ID, orderFormFieldsConfig.email.name),
    name: orderFormFieldsConfig.email.name,
    validate: undefined,
    InputProps: {
      inputElementProps: {
        id: orderFormFieldsConfig.email.name,
        placeholder: orderFormFieldsConfig.email.placeholder,
      },
      label: orderFormFieldsConfig.email.label,
    },
  },
  phoneNumber: {
    id: createFormFieldId(FORM_ID, orderFormFieldsConfig.phoneNumber.name),
    name: orderFormFieldsConfig.phoneNumber.name,
    validate: undefined,
    InputProps: {
      inputElementProps: {
        id: orderFormFieldsConfig.phoneNumber.label,
        placeholder: orderFormFieldsConfig.phoneNumber.placeholder,
      },
      label: orderFormFieldsConfig.phoneNumber.label,
    },
  },
};
