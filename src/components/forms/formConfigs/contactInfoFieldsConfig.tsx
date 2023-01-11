import { COL_SIZE_2, ORDER_FORM_ID } from '../../../constants';
import { TContactInfoFieldsConfig } from '../../../types';
import { createFormFieldId, normalizePhone } from '../../../utils';
import { orderFormEmailValidator, orderFormPhoneNumberValidator } from '../../../validators';

import { orderFormInputsConfig } from './orderFormInputsConfig';

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
    size: COL_SIZE_2,
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
    size: COL_SIZE_2,
  },
};
