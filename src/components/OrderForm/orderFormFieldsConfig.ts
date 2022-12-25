import {
  orderFormFieldsNames,
} from '../../enums';

type TOrderFormFieldsConfig = Record<keyof typeof orderFormFieldsNames, { name: string, placeholder: string, label: string }>;

export const orderFormFieldsConfig: TOrderFormFieldsConfig = {
  sendingType: { name: 'sendingType', placeholder: '', label: '' },
  sendingTypeEmail: { name: 'sendingTypeEmail', placeholder: '', label: 'Отправить на email' },
  sendingTypePost: { name: 'sendingTypePost', placeholder: '', label: 'Отправить на почтовый адрес' },
  postalCode: { name: 'postalCode', placeholder: 'Почтовый индекс', label: 'Почтовый индекс' },
  country: { name: 'country', placeholder: 'Страна', label: 'Страна' },
  regionName: { name: 'regionName', placeholder: 'Регион', label: 'Регион' },
  cityName: { name: 'cityName', placeholder: 'Населенный пункт', label: 'Населенный пункт' },
  streetName: { name: 'streetName', placeholder: 'Улица', label: 'Улица' },
  houseNumber: { name: 'houseNumber', placeholder: 'Дом', label: 'Дом' },
  buildingNumber: { name: 'buildingNumber', placeholder: 'Корпус', label: 'Корпус' },
  housingNumber: { name: 'housingNumber', placeholder: 'Строение', label: 'Строение' },
  flatNumber: { name: 'flatNumber', placeholder: 'Квартира', label: 'Квартира' },
  email: { name: 'email', placeholder: 'email', label: 'email' },
  phoneNumber: { name: 'phoneNumber', placeholder: '+7(8) 999 9999999 или +7(8)9999999999', label: 'Телефон' },
  firstName: { name: 'firstName', placeholder: 'Имя', label: 'Имя' },
  lastName: { name: 'lastName', placeholder: 'Фамилия', label: 'Фамилия' },
  patronymic: { name: 'patronymic', placeholder: 'Отчество', label: 'Отчество' },
};

export const FORM_ID = 'order';
