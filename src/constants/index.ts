import { EPluralizeConfigKey } from '../enums';
import { TPluralizedTextForms } from '../types';

export { mockedData } from './mocks';
export { validationErrorMessages } from './validationErrorMessages';
export * from './magicNumbers';
export * from './requestResultMessages';
export * from './popups';

export const RUBLE_SIGN = '₽';
export const emailRegExp = /^[\w ]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i;
export const phoneNumberRegExp = /^(\+7)(\s\(\d{3}\))\s[\d ]{3}-[\d ]{4}$/;
export const ORDER_FORM_ID = 'order';
export const PROFILE_FORM_ID = 'profile';
export const PROFILE_FORM_INPUT_NAME_PREFIX = 'userProfile_';

export const bookWordForms: TPluralizedTextForms = {
  [EPluralizeConfigKey.nominativeCaseForm]: 'книга',
  [EPluralizeConfigKey.genitiveCaseForm]: 'книги',
  [EPluralizeConfigKey.pluralForm]: 'книг',
};
