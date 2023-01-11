import { EValidationErrorMessages } from '../enums';

import { passwordLength, POSTAL_CODE_LENGTH } from './magicNumbers';

export const validationErrorMessages: Record<EValidationErrorMessages, string> = {
  [EValidationErrorMessages.required]: 'Поле обязательно для заполнения',
  [EValidationErrorMessages.sendingTypeIsRequired]: 'Выберите способ доставки',
  [EValidationErrorMessages.incorrectEmail]: 'Некорректный email',
  [EValidationErrorMessages.incorrectPhoneNumber]: 'Некорректный номер телефона',
  [EValidationErrorMessages.passwordMinLength]: `Длина пароля должна быть не менее ${passwordLength.min} символов`,
  [EValidationErrorMessages.passwordMaxLength]: `Длина пароля не должна превышать ${passwordLength.max} символов`,
  [EValidationErrorMessages.lettersAndDigitsOnlyAreRequired]: 'Пароль может содержать только буквы и цифры',
  [EValidationErrorMessages.lettersOnlyAreRequired]: 'Поле может содержать только буквы',
  [EValidationErrorMessages.digitsOnlyAreRequired]: 'Поле может содержать только цифры',
  [EValidationErrorMessages.postalCodeLength]: `Длина индекса должна быть ${POSTAL_CODE_LENGTH} символов`,
  [EValidationErrorMessages.incorrectValue]: 'Введено некорректное значение',
  [EValidationErrorMessages.incorrectURL]: 'Некорректное значение URL',
};
