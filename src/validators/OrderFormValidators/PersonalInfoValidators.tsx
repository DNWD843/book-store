import { TOrderFormValues } from '../../types';

export const firstNameValidator = (value: TOrderFormValues['firstName']) => {
  if (!value) return 'Поле обязательно для заполнения';

  if (/[^a-zа-я]/ig.test(value)) return 'Поле может содержать только буквы';
};

export const lastNameValidator = (value: TOrderFormValues['lastName']) => {
  if (!value) return 'Поле обязательно для заполнения';

  if (/[^a-zа-я]/ig.test(value)) return 'Поле может содержать только буквы';
};
