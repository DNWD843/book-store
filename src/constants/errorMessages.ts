import { EPasswordLength } from '../enums/auth';

export const enum EErrorMessageTypes {
  required = 'required',
  sendingTypeIsRequired = 'sendingTypeIsRequired',
  incorrectEmail = 'incorrectEmail',
  minLengthIsRequired = 'minLengthIsRequired',
  maxLengthIsRequired = 'maxLengthIsRequired',
  lettersAndDigitsOnlyAreRequired = 'lettersAndDigitsOnlyAreRequired',
  lettersOnlyAreRequired = 'lettersOnlyAreRequired',
}

export const errorMessages: Record<EErrorMessageTypes, string> = {
  [EErrorMessageTypes.required]: 'Поле обязательно для заполнения',
  sendingTypeIsRequired: 'Выберите способ доставки',
  incorrectEmail: 'Некорректный email',
  minLengthIsRequired: `Длина пароля должна быть не менее ${EPasswordLength.min} символов`,
  maxLengthIsRequired: `Длина пароля не должна превышать ${EPasswordLength.max} символов`,
  lettersAndDigitsOnlyAreRequired: 'Пароль может содержать только буквы и цифры',
  lettersOnlyAreRequired: 'Поле может содержать только буквы',
};
