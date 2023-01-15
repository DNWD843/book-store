import { EPluralizeConfigKey } from '../enums';
import { TPluralizedTextForms } from '../types';

export * from './mocks';
export { validationErrorMessages } from './validationErrorMessages';
export * from './magicNumbers';
export * from './requestResultMessages';
export * from './popups';

export const RUBLE_SIGN = '₽';
export const emailRegExp = /^[\w ]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i;
export const phoneNumberRegExp = /^(\+7)(\s\(\d{3}\))\s[\d ]{3}-[\d ]{4}$/;
export const urlRegExp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/;
export const ORDER_FORM_ID = 'order';
export const PROFILE_FORM_ID = 'profile';

export const bookWordForms: TPluralizedTextForms = {
  [EPluralizeConfigKey.nominativeCaseForm]: 'книга',
  [EPluralizeConfigKey.genitiveCaseForm]: 'книги',
  [EPluralizeConfigKey.pluralForm]: 'книг',
};

export const purchaseDateTemplate = 'DD.MM.YYYY HH:mm';

export const LINK_TO_GITHUB = 'https://github.com/DNWD843';
export const LINK_TO_TELEGRAM = 'https://t.me/mad_damon';
export const LINK_TO_LINKED_IN = 'https://linkedin.com/in/maddamon';
