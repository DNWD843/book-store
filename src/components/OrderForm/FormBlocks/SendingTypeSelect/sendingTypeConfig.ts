import { TSendingTypeRadioButtons } from '../../../../types';
import { createFormFieldId } from '../../../../utils';
import { FORM_ID, orderFormFields } from '../../constants';

export const sendingTypeConfig: TSendingTypeRadioButtons = [
  {
    name: orderFormFields.sendingType.name,
    component: 'input',
    value: 'email',
    id: createFormFieldId(FORM_ID, orderFormFields.sendingTypeEmail.name),
    label: orderFormFields.sendingTypeEmail.label,
    className: 'form-check-input',
  },
  {
    name: orderFormFields.sendingType.name,
    component: 'input',
    value: 'post',
    id: createFormFieldId(FORM_ID, orderFormFields.sendingTypePost.name),
    label: orderFormFields.sendingTypePost.label,
    className: 'form-check-input',
  },
];
