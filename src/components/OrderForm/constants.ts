export const orderFormFields: { [key: string]: { name: string, placeholder: string, label: string } } = {
  sendingTypeEmail: { name: 'sendingTypeEmail', placeholder: '', label: 'Отправить на email' },
  sendingTypePost: { name: 'sendingTypePost', placeholder: '', label: 'Отправить на почтовый адрес' },
  postalCode: { name: 'postalCode', placeholder: 'Почтовый индекс', label: 'Почтовый индекс' },
  country: { name: 'country', placeholder: 'Страна', label: 'Страна' },
  regionName: { name: 'regionName', placeholder: 'Регион', label: 'Регион' },
  cityName: { name: 'cityName', placeholder: 'Город', label: 'Город' },
  streetName: { name: 'streetName', placeholder: 'Улица', label: 'Улица' },
  houseNumber: { name: 'houseNumber', placeholder: 'Дом', label: 'Дом' },
  buildingNumber: { name: 'buildingNumber', placeholder: 'Корпус', label: 'Корпус' },
  housingNumber: { name: 'housingNumber', placeholder: 'Строение', label: 'Строение' },
  flatNumber: { name: 'flatNumber', placeholder: 'Квартира', label: 'Квартира' },
  email: { name: 'email', placeholder: 'email', label: 'email' },
  phoneNumber: { name: 'phoneNumber', placeholder: 'Телефон', label: 'Телефон' },
  firstName: { name: 'firstName', placeholder: 'Имя', label: 'Имя' },
  lastName: { name: 'lastName', placeholder: 'Фамилия', label: 'Фамилия' },
  patronymic: { name: 'patronymic', placeholder: 'Отчество', label: 'Отчество' },
};

export const ORDER_FORM_TITLE = 'Оформление заказа';
export const FORM_ID = 'order';
