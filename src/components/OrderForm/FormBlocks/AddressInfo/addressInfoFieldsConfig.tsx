import { EAddressInfoFieldsNames } from '../../../../enums';
import { TFieldConfig } from '../../../../types';
import { createFormFieldId } from '../../../../utils';
import { postalCodeValidator } from '../../../../validators';
import { FORM_ID, orderFormFieldsConfig } from '../../orderFormFieldsConfig';

type TAddressInfoFieldsConfig = Record<keyof typeof EAddressInfoFieldsNames, TFieldConfig>;

export const addressInfoFieldsConfig: TAddressInfoFieldsConfig = {
  postalCode: {
    id: createFormFieldId(FORM_ID, orderFormFieldsConfig.postalCode.name),
    name: orderFormFieldsConfig.postalCode.name,
    validate: postalCodeValidator,
    InputProps: { inputElementProps: {
      id: orderFormFieldsConfig.postalCode.name,
      placeholder: orderFormFieldsConfig.postalCode.placeholder,
    },
    label: orderFormFieldsConfig.postalCode.label },
  },
  country: {
    id: createFormFieldId(FORM_ID, orderFormFieldsConfig.country.name),
    name: orderFormFieldsConfig.country.name,
    validate: undefined,
    InputProps: { inputElementProps: {
      id: orderFormFieldsConfig.country.name,
      placeholder: orderFormFieldsConfig.country.placeholder,
    },
    label: orderFormFieldsConfig.country.label },
  },
  regionName: {
    id: createFormFieldId(FORM_ID, orderFormFieldsConfig.regionName.name),
    name: orderFormFieldsConfig.regionName.name,
    validate: undefined,
    InputProps: { inputElementProps: {
      id: orderFormFieldsConfig.regionName.name,
      placeholder: orderFormFieldsConfig.regionName.placeholder,
    },
    label: orderFormFieldsConfig.regionName.label },
  },
  cityName: {
    id: createFormFieldId(FORM_ID, orderFormFieldsConfig.cityName.name),
    name: orderFormFieldsConfig.cityName.name,
    validate: undefined,
    InputProps: { inputElementProps: {
      id: orderFormFieldsConfig.cityName.name,
      placeholder: orderFormFieldsConfig.cityName.placeholder,
    },
    label: orderFormFieldsConfig.cityName.label },
  },
  streetName: {
    id: createFormFieldId(FORM_ID, orderFormFieldsConfig.streetName.name),
    name: orderFormFieldsConfig.streetName.name,
    validate: undefined,
    InputProps: { inputElementProps: {
      id: orderFormFieldsConfig.streetName.name,
      placeholder: orderFormFieldsConfig.streetName.placeholder,
    },
    label: orderFormFieldsConfig.streetName.label },
  },
  houseNumber: {
    id: createFormFieldId(FORM_ID, orderFormFieldsConfig.houseNumber.name),
    name: orderFormFieldsConfig.houseNumber.name,
    validate: undefined,
    InputProps: { inputElementProps: {
      id: orderFormFieldsConfig.houseNumber.name,
      placeholder: orderFormFieldsConfig.houseNumber.placeholder,
    },
    label: orderFormFieldsConfig.houseNumber.label },
  },
  buildingNumber: {
    id: createFormFieldId(FORM_ID, orderFormFieldsConfig.buildingNumber.name),
    name: orderFormFieldsConfig.buildingNumber.name,
    validate: undefined,
    InputProps: { inputElementProps: {
      id: orderFormFieldsConfig.buildingNumber.name,
      placeholder: orderFormFieldsConfig.buildingNumber.placeholder,
    },
    label: orderFormFieldsConfig.buildingNumber.label },
  },
  housingNumber: {
    id: createFormFieldId(FORM_ID, orderFormFieldsConfig.housingNumber.name),
    name: orderFormFieldsConfig.housingNumber.name,
    validate: undefined,
    InputProps: { inputElementProps: {
      id: orderFormFieldsConfig.housingNumber.name,
      placeholder: orderFormFieldsConfig.housingNumber.placeholder,
    },
    label: orderFormFieldsConfig.housingNumber.label },
  },
  flatNumber: {
    id: createFormFieldId(FORM_ID, orderFormFieldsConfig.flatNumber.name),
    name: orderFormFieldsConfig.flatNumber.name,
    validate: undefined,
    InputProps: { inputElementProps: {
      id: orderFormFieldsConfig.flatNumber.name,
      placeholder: orderFormFieldsConfig.flatNumber.placeholder,
    },
    label: orderFormFieldsConfig.flatNumber.label },
  },
};
