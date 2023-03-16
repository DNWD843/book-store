import React from 'react';

import { MINIMAL_BOOKS_QUANTITY } from '../constants';
import { TBookInfo } from '../types';

export const createFormFieldId = (formId: string, fieldId: string) => `${formId}-${fieldId}`;

export const getTotalPrice = (collection: TBookInfo[]) => collection.reduce<{ totalPrice: number, bookQuantity: number }>((acc, book) => {
  const bookQuantity = book.quantity ?? MINIMAL_BOOKS_QUANTITY;

  acc.totalPrice += (book.price * bookQuantity);
  acc.bookQuantity += bookQuantity;

  return acc;
}, { totalPrice: 0, bookQuantity: 0 });

export const normalizePhone = (value: string) => {
  if (!value) return value;

  const onlyNums = value.replace(/[^\d]/g, '');

  if (onlyNums.length <= 3) return onlyNums.replace(onlyNums[0], '+7 (');
  if (onlyNums.length > 3 && onlyNums.length <= 7) return `+7 (${onlyNums.slice(1, 4)}) ${onlyNums.slice(4, 7)}`;
  return `+7 (${onlyNums.slice(1, 4)}) ${onlyNums.slice(4, 7)}-${onlyNums.slice(7, 11)}`;
};

export const getBlur = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => evt.currentTarget.blur();
