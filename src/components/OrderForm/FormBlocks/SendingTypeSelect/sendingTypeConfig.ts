import { ORDER_FORM_ID } from '../../../../constants';
import { ESendingTypes } from '../../../../enums';
import { TSendingTypeRadioButtons } from '../../../../types';
import { createFormFieldId } from '../../../../utils';
import { orderFormFieldsConfig } from '../../orderFormFieldsConfig';

export const sendingTypeConfig: TSendingTypeRadioButtons = [
  {
    name: orderFormFieldsConfig.sendingType.name,
    component: 'input',
    value: ESendingTypes.email,
    id: createFormFieldId(ORDER_FORM_ID, orderFormFieldsConfig.sendingTypeEmail.name),
    label: orderFormFieldsConfig.sendingTypeEmail.label,
    className: 'form-check-input',
  },
  {
    name: orderFormFieldsConfig.sendingType.name,
    component: 'input',
    value: ESendingTypes.post,
    id: createFormFieldId(ORDER_FORM_ID, orderFormFieldsConfig.sendingTypePost.name),
    label: orderFormFieldsConfig.sendingTypePost.label,
    className: 'form-check-input',
  },
];
