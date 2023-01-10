import { MINIMAL_BOOKS_QUANTITY } from '../constants';
import { EPluralizeConfigKey } from '../enums';
import { TBookInfo, TPluralizedTextForms } from '../types';

export const createFormFieldId = (formId: string, fieldId: string) => `${formId}-${fieldId}`;

export const getTotalPrice = (collection: TBookInfo[]) => collection.reduce<{ totalPrice: number, booksQuantity: number }>((acc, book) => {
  const booksQuantity = book.quantity ?? MINIMAL_BOOKS_QUANTITY;

  acc.totalPrice += (book.price * booksQuantity);
  acc.booksQuantity += booksQuantity;

  return acc;
}, { totalPrice: 0, booksQuantity: 0 });

export const pluralize = ({ quantity, textForms }: { quantity: number, textForms: TPluralizedTextForms }): string => {
  const value = Math.abs(quantity) % 100;
  const lastDigit = value % 10;

  if (value > 10 && value < 20) { return textForms[EPluralizeConfigKey.pluralForm]; }
  if (lastDigit > 1 && lastDigit < 5) { return textForms[EPluralizeConfigKey.genitiveCaseForm]; }
  if (lastDigit === 1) { return textForms[EPluralizeConfigKey.nominativeCaseForm]; }

  return textForms[EPluralizeConfigKey.pluralForm];
};
