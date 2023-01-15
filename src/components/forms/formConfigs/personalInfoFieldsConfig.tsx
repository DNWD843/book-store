import { COL_SIZE_3, ORDER_FORM_ID } from '../../../constants';
import { TPersonalInfoFormFieldsConfig } from '../../../types';
import { createFormFieldId } from '../../../utils';
import { personalInfoValidator } from '../../../validators';

import { orderFormInputsConfig } from './orderFormInputsConfig';

export const personalInfoFieldsConfig: TPersonalInfoFormFieldsConfig = {
  lastName: {
    id: createFormFieldId(ORDER_FORM_ID, orderFormInputsConfig.lastName.name),
    name: orderFormInputsConfig.lastName.name,
    validate: personalInfoValidator,
    InputProps: {
      inputElementProps: {
        placeholder: orderFormInputsConfig.lastName.placeholder,
      },
      label: orderFormInputsConfig.lastName.label,
    },
    size: COL_SIZE_3,
  },
  firstName: {
    id: createFormFieldId(ORDER_FORM_ID, orderFormInputsConfig.firstName.name),
    name: orderFormInputsConfig.firstName.name,
    validate: personalInfoValidator,
    InputProps: {
      inputElementProps: {
        placeholder: orderFormInputsConfig.firstName.placeholder,
      },
      label: orderFormInputsConfig.firstName.label,
    },
    size: COL_SIZE_3,
  },
  patronymic: {
    id: createFormFieldId(ORDER_FORM_ID, orderFormInputsConfig.patronymic.name),
    name: orderFormInputsConfig.patronymic.name,
    InputProps: {
      inputElementProps: {
        placeholder: orderFormInputsConfig.patronymic.placeholder,
      },
      label: orderFormInputsConfig.patronymic.label,
    },
    size: COL_SIZE_3,
  },
};
