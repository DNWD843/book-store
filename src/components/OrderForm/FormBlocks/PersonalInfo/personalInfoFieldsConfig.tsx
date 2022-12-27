import { ORDER_FORM_ID } from '../../../../constants';
import { EPersonalInfoFieldsNames } from '../../../../enums';
import { IFieldConfig } from '../../../../types';
import { createFormFieldId } from '../../../../utils';
import { personalInfoValidator } from '../../../../validators';
import { orderFormFieldsConfig } from '../../orderFormFieldsConfig';

type TPersonalInfoFieldsConfig = Record<keyof typeof EPersonalInfoFieldsNames, IFieldConfig>;

export const personalInfoFieldsConfig: TPersonalInfoFieldsConfig = {
  lastName: {
    id: createFormFieldId(ORDER_FORM_ID, orderFormFieldsConfig.lastName.name),
    name: orderFormFieldsConfig.lastName.name,
    validate: personalInfoValidator,
    InputProps: {
      inputElementProps: {
        id: orderFormFieldsConfig.lastName.name,
        placeholder: orderFormFieldsConfig.lastName.placeholder,
      },
      label: orderFormFieldsConfig.lastName.label,
    },
  },
  firstName: {
    id: createFormFieldId(ORDER_FORM_ID, orderFormFieldsConfig.firstName.name),
    name: orderFormFieldsConfig.firstName.name,
    validate: personalInfoValidator,
    InputProps: {
      inputElementProps: {

        id: orderFormFieldsConfig.firstName.name,
        placeholder: orderFormFieldsConfig.firstName.placeholder,
      },
      label: orderFormFieldsConfig.firstName.label,
    },
  },
  patronymic: {
    id: createFormFieldId(ORDER_FORM_ID, orderFormFieldsConfig.patronymic.name),
    name: orderFormFieldsConfig.patronymic.name,
    InputProps: {
      inputElementProps: {
        id: orderFormFieldsConfig.patronymic.name,
        placeholder: orderFormFieldsConfig.patronymic.placeholder,
      },
      label: orderFormFieldsConfig.patronymic.label,
    },
  },
};
