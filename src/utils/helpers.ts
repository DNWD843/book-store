import { MINIMAL_BOOKS_QUANTITY } from '../constants';
import { TBookInfo } from '../types';

export const createFormFieldId = (formId: string, fieldId: string) => `${formId}-${fieldId}`;

export const getTotalPrice = (collection: TBookInfo[]) => collection.reduce<{ totalPrice: number, booksQuantity: number }>((acc, book) => {
  const booksQuantity = book.quantity ?? MINIMAL_BOOKS_QUANTITY;

  acc.totalPrice += (book.price * booksQuantity);
  acc.booksQuantity += booksQuantity;

  return acc;
}, { totalPrice: 0, booksQuantity: 0 });

export const normalizePhone = (value: string) => {
  if (!value) return value;

  const onlyNums = value.replace(/[^\d]/g, '');

  if (onlyNums.length <= 3) return onlyNums.replace(onlyNums[0], '+7 (');
  if (onlyNums.length > 3 && onlyNums.length <= 7) return `+7 (${onlyNums.slice(1, 4)}) ${onlyNums.slice(4, 7)}`;
  return `+7 (${onlyNums.slice(1, 4)}) ${onlyNums.slice(4, 7)}-${onlyNums.slice(7, 11)}`;
};
