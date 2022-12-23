import { FieldState } from 'final-form';

import { EPasswordLength } from '../enums/auth';
import { TAuthFormValues } from '../types';

export const email = (value: TAuthFormValues['password'], allValues?: Object, meta?: FieldState<string>) => {
  if (!meta?.visited) return;

  if (!value) {
    return 'Поле обязательно для заполнения';
  }

  if (!/^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i.test(value)) {
    return 'Некорректный email';
  }
};

export const password = (value: TAuthFormValues['password'], allValues?: Object, meta?: FieldState<string>) => {
  if (!meta?.visited) return;

  if (!value) {
    return 'Поле обязательно для заполнения';
  }

  if (value.length < EPasswordLength.min) {
    return `Длина пароля должна быть не менее ${EPasswordLength.min} символов`;
  }

  if (value.length > EPasswordLength.max) {
    return `Длина пароля не должна превышать ${EPasswordLength.max} символов`;
  }

  if (/\W/gi.test(value)) {
    return 'Пароль может содержать только буквы и цифры';
  }
};
