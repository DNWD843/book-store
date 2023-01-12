import { orderFormFieldsNames } from '../../../enums';
import { TOrderFormInputsConfig } from '../../../types';

export const orderFormInputsConfig: TOrderFormInputsConfig = {
  sendingType: { name: orderFormFieldsNames.sendingType, placeholder: '', label: '' },
  sendingTypeEmail: { name: orderFormFieldsNames.sendingTypeEmail, placeholder: '', label: 'Отправить на email' },
  sendingTypePost: { name: orderFormFieldsNames.sendingTypePost, placeholder: '', label: 'Отправить на почтовый адрес' },
  postalCode: { name: orderFormFieldsNames.postalCode, placeholder: 'Почтовый индекс', label: 'Почтовый индекс' },
  country: { name: orderFormFieldsNames.country, placeholder: 'Страна', label: 'Страна' },
  regionName: { name: orderFormFieldsNames.regionName, placeholder: 'Регион', label: 'Регион' },
  cityName: { name: orderFormFieldsNames.cityName, placeholder: 'Населенный пункт', label: 'Населенный пункт' },
  streetName: { name: orderFormFieldsNames.streetName, placeholder: 'Улица', label: 'Улица' },
  houseNumber: { name: orderFormFieldsNames.houseNumber, placeholder: 'Дом', label: 'Дом' },
  buildingNumber: { name: orderFormFieldsNames.buildingNumber, placeholder: 'Корпус', label: 'Корпус' },
  housingNumber: { name: orderFormFieldsNames.housingNumber, placeholder: 'Строение', label: 'Строение' },
  flatNumber: { name: orderFormFieldsNames.flatNumber, placeholder: 'Квартира', label: 'Квартира' },
  email: { name: orderFormFieldsNames.email, placeholder: 'email', label: 'email' },
  phoneNumber: { name: orderFormFieldsNames.phoneNumber, placeholder: '+7 (999) 999-9999', label: 'Телефон' },
  firstName: { name: orderFormFieldsNames.firstName, placeholder: 'Имя', label: 'Имя' },
  lastName: { name: orderFormFieldsNames.lastName, placeholder: 'Фамилия', label: 'Фамилия' },
  patronymic: { name: orderFormFieldsNames.patronymic, placeholder: 'Отчество', label: 'Отчество' },
};
