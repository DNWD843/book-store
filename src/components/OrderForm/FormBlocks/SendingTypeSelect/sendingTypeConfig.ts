import { ESendingTypes } from '../../../../enums';
import { TSendingTypeRadioButtons } from '../../../../types';
import { createFormFieldId } from '../../../../utils';
import { FORM_ID, orderFormFields } from '../../constants';

export const sendingTypeConfig: TSendingTypeRadioButtons = [
  {
    name: orderFormFields.sendingType.name,
    component: 'input',
    value: ESendingTypes.email,
    id: createFormFieldId(FORM_ID, orderFormFields.sendingTypeEmail.name),
    label: orderFormFields.sendingTypeEmail.label,
    className: 'form-check-input',
  },
  {
    name: orderFormFields.sendingType.name,
    component: 'input',
    value: ESendingTypes.post,
    id: createFormFieldId(FORM_ID, orderFormFields.sendingTypePost.name),
    label: orderFormFields.sendingTypePost.label,
    className: 'form-check-input',
  },
];
