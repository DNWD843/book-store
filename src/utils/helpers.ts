import { MINIMAL_BOOKS_QUANTITY } from '../constants';
import { TBookInfo } from '../types';

export const createFormFieldId = (formId: string, fieldId: string) => `${formId}-${fieldId}`;

export const getTotalPrice = (collection: TBookInfo[]) => collection.reduce<number>((acc, book) => {
  const booksQuantity = book.quantity ?? MINIMAL_BOOKS_QUANTITY;
  // eslint-disable-next-line no-param-reassign
  acc += (book.price * booksQuantity);

  return acc;
}, 0);
