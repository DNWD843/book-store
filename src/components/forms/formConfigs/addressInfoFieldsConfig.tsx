import { COL_SIZE_3, ORDER_FORM_ID } from '../../../constants';
import { TAddressInfoFieldsConfig } from '../../../types';
import { createFormFieldId } from '../../../utils';
import {
  addressLiteralValidator,
  addressNumberValidator,
  notRequiredAddressNumberValidator,
  postalCodeValidator,
} from '../../../validators';

import { orderFormInputsConfig } from './orderFormInputsConfig';

export const addressInfoFieldsConfig: TAddressInfoFieldsConfig = {
  postalCode: {
    id: createFormFieldId(ORDER_FORM_ID, orderFormInputsConfig.postalCode.name),
    name: orderFormInputsConfig.postalCode.name,
    validate: postalCodeValidator,
    InputProps: { inputElementProps: {
      id: orderFormInputsConfig.postalCode.name,
      placeholder: orderFormInputsConfig.postalCode.placeholder,
    },
    label: orderFormInputsConfig.postalCode.label },
    size: COL_SIZE_3,
  },
  country: {
    id: createFormFieldId(ORDER_FORM_ID, orderFormInputsConfig.country.name),
    name: orderFormInputsConfig.country.name,
    validate: addressLiteralValidator,
    InputProps: { inputElementProps: {
      id: orderFormInputsConfig.country.name,
      placeholder: orderFormInputsConfig.country.placeholder,
    },
    label: orderFormInputsConfig.country.label },
    size: COL_SIZE_3,
  },
  regionName: {
    id: createFormFieldId(ORDER_FORM_ID, orderFormInputsConfig.regionName.name),
    name: orderFormInputsConfig.regionName.name,
    validate: addressLiteralValidator,
    InputProps: { inputElementProps: {
      id: orderFormInputsConfig.regionName.name,
      placeholder: orderFormInputsConfig.regionName.placeholder,
    },
    label: orderFormInputsConfig.regionName.label },
    size: COL_SIZE_3,
  },
  cityName: {
    id: createFormFieldId(ORDER_FORM_ID, orderFormInputsConfig.cityName.name),
    name: orderFormInputsConfig.cityName.name,
    validate: addressLiteralValidator,
    InputProps: { inputElementProps: {
      id: orderFormInputsConfig.cityName.name,
      placeholder: orderFormInputsConfig.cityName.placeholder,
    },
    label: orderFormInputsConfig.cityName.label },
    size: COL_SIZE_3,
  },
  streetName: {
    id: createFormFieldId(ORDER_FORM_ID, orderFormInputsConfig.streetName.name),
    name: orderFormInputsConfig.streetName.name,
    validate: addressLiteralValidator,
    InputProps: { inputElementProps: {
      id: orderFormInputsConfig.streetName.name,
      placeholder: orderFormInputsConfig.streetName.placeholder,
    },
    label: orderFormInputsConfig.streetName.label },
    size: COL_SIZE_3,
  },
  houseNumber: {
    id: createFormFieldId(ORDER_FORM_ID, orderFormInputsConfig.houseNumber.name),
    name: orderFormInputsConfig.houseNumber.name,
    validate: addressNumberValidator,
    InputProps: { inputElementProps: {
      id: orderFormInputsConfig.houseNumber.name,
      placeholder: orderFormInputsConfig.houseNumber.placeholder,
    },
    label: orderFormInputsConfig.houseNumber.label },
    size: COL_SIZE_3,
  },
  buildingNumber: {
    id: createFormFieldId(ORDER_FORM_ID, orderFormInputsConfig.buildingNumber.name),
    name: orderFormInputsConfig.buildingNumber.name,
    validate: notRequiredAddressNumberValidator,
    InputProps: { inputElementProps: {
      id: orderFormInputsConfig.buildingNumber.name,
      placeholder: orderFormInputsConfig.buildingNumber.placeholder,
    },
    label: orderFormInputsConfig.buildingNumber.label },
    size: COL_SIZE_3,
  },
  housingNumber: {
    id: createFormFieldId(ORDER_FORM_ID, orderFormInputsConfig.housingNumber.name),
    name: orderFormInputsConfig.housingNumber.name,
    validate: notRequiredAddressNumberValidator,
    InputProps: { inputElementProps: {
      id: orderFormInputsConfig.housingNumber.name,
      placeholder: orderFormInputsConfig.housingNumber.placeholder,
    },
    label: orderFormInputsConfig.housingNumber.label },
    size: COL_SIZE_3,
  },
  flatNumber: {
    id: createFormFieldId(ORDER_FORM_ID, orderFormInputsConfig.flatNumber.name),
    name: orderFormInputsConfig.flatNumber.name,
    validate: notRequiredAddressNumberValidator,
    InputProps: { inputElementProps: {
      id: orderFormInputsConfig.flatNumber.name,
      placeholder: orderFormInputsConfig.flatNumber.placeholder,
    },
    label: orderFormInputsConfig.flatNumber.label },
    size: COL_SIZE_3,
  },
};
