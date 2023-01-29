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

export const ANONYMOUS_USER_DEFAULT_AVATAR = 'https://sun9-80.userapi.com/impg/autZFMKK_G7opctBhc0t5SjESiS2f0D6ifurrQ/vBhVZJPP6K0.jpg?size=130x130&quality=96&sign=57c65d63d56e7666d99baf61086c3e39&c_uniq_tag=MxH0S8cAdzqoekKJndb599TbBwMBLxBXpmj-t8mtcR4&type=album';
