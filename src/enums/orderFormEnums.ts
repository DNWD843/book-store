export const enum ESendingTypes {
  email = 'email',
  post = 'post',
}

export enum ESendingTypeFieldsNames {
  sendingType = 'sendingType',
  sendingTypeEmail = 'sendingTypeEmail',
  sendingTypePost = 'sendingTypePost',
}

export enum EAddressInfoFieldsNames {
  postalCode = 'postalCode',
  country = 'country',
  regionName = 'regionName',
  cityName = 'cityName',
  streetName = 'streetName',
  houseNumber = 'houseNumber',
  buildingNumber = 'buildingNumber',
  housingNumber = 'housingNumber',
  flatNumber = 'flatNumber',
}

export enum EPersonalInfoFieldsNames {
  firstName = 'firstName',
  lastName = 'lastName',
  patronymic = 'patronymic',
}

export enum EContactInfoFieldsNames {
  email = 'email',
  phoneNumber = 'phoneNumber',
}

export const orderFormFieldsNames = {
  ...ESendingTypeFieldsNames,
  ...EPersonalInfoFieldsNames,
  ...EAddressInfoFieldsNames,
  ...EContactInfoFieldsNames,
};

export const enum EOrderForm {
  submitButtonTitle = 'Оформить заказ',
}
