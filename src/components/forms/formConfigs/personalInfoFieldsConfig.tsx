import { ORDER_FORM_ID } from '../../../constants';
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
        id: orderFormInputsConfig.lastName.name,
        placeholder: orderFormInputsConfig.lastName.placeholder,
      },
      label: orderFormInputsConfig.lastName.label,
    },
  },
  firstName: {
    id: createFormFieldId(ORDER_FORM_ID, orderFormInputsConfig.firstName.name),
    name: orderFormInputsConfig.firstName.name,
    validate: personalInfoValidator,
    InputProps: {
      inputElementProps: {

        id: orderFormInputsConfig.firstName.name,
        placeholder: orderFormInputsConfig.firstName.placeholder,
      },
      label: orderFormInputsConfig.firstName.label,
    },
  },
  patronymic: {
    id: createFormFieldId(ORDER_FORM_ID, orderFormInputsConfig.patronymic.name),
    name: orderFormInputsConfig.patronymic.name,
    InputProps: {
      inputElementProps: {
        id: orderFormInputsConfig.patronymic.name,
        placeholder: orderFormInputsConfig.patronymic.placeholder,
      },
      label: orderFormInputsConfig.patronymic.label,
    },
  },
};
