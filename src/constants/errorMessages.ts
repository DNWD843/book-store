import { EErrorMessageTypes } from '../enums';

import { passwordLength, POSTAL_CODE_LENGTH } from './magicNumbers';

export const errorMessages: Record<EErrorMessageTypes, string> = {
  [EErrorMessageTypes.required]: 'Поле обязательно для заполнения',
  [EErrorMessageTypes.sendingTypeIsRequired]: 'Выберите способ доставки',
  [EErrorMessageTypes.incorrectEmail]: 'Некорректный email',
  [EErrorMessageTypes.incorrectPhoneNumber]: 'Некорректный номер телефона',
  [EErrorMessageTypes.passwordMinLength]: `Длина пароля должна быть не менее ${passwordLength.min} символов`,
  [EErrorMessageTypes.passwordMaxLength]: `Длина пароля не должна превышать ${passwordLength.max} символов`,
  [EErrorMessageTypes.lettersAndDigitsOnlyAreRequired]: 'Пароль может содержать только буквы и цифры',
  [EErrorMessageTypes.lettersOnlyAreRequired]: 'Поле может содержать только буквы',
  [EErrorMessageTypes.digitsOnlyAreRequired]: 'Поле может содержать только цифры',
  [EErrorMessageTypes.postalCodeLength]: `Длина индекса должна быть ${POSTAL_CODE_LENGTH} символов`,
  [EErrorMessageTypes.incorrectValue]: 'Введено некорректное значение',
};
