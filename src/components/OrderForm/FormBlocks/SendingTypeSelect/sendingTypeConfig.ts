import { ORDER_FORM_ID } from '../../../../constants';
import { ESendingTypes } from '../../../../enums';
import { TSendingTypeRadioButtons } from '../../../../types';
import { createFormFieldId } from '../../../../utils';
import { orderFormInputsConfig } from '../../orderFormInputsConfig';

export const sendingTypeConfig: TSendingTypeRadioButtons = [
  {
    name: orderFormInputsConfig.sendingType.name,
    component: 'input',
    value: ESendingTypes.email,
    id: createFormFieldId(ORDER_FORM_ID, orderFormInputsConfig.sendingTypeEmail.name),
    label: orderFormInputsConfig.sendingTypeEmail.label,
    className: 'form-check-input',
  },
  {
    name: orderFormInputsConfig.sendingType.name,
    component: 'input',
    value: ESendingTypes.post,
    id: createFormFieldId(ORDER_FORM_ID, orderFormInputsConfig.sendingTypePost.name),
    label: orderFormInputsConfig.sendingTypePost.label,
    className: 'form-check-input',
  },
];
