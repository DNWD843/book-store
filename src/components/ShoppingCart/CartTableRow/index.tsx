import React, { useMemo } from 'react';

import { MINIMAL_BOOKS_QUANTITY } from '../../../constants';
import { useUserSavingsHandlers } from '../../../hooks/useUserSavingsHandlers';
import { TBookInfo } from '../../../types';

import { CartTableRow } from './CartTableRow';

const CartTableRowComponent: React.FC<{ bookInfo: TBookInfo, index: number }> = ({ bookInfo, index }) => {
  const { handleCartButtonClick, increaseBooksQuantity, decreaseBooksQuantity } = useUserSavingsHandlers(bookInfo.id);

  const onDeleteBook = () => {
    handleCartButtonClick(bookInfo);
  };

  const totalPricePerBook = useMemo(() => bookInfo.price * (bookInfo.quantity ?? MINIMAL_BOOKS_QUANTITY), [bookInfo.price, bookInfo.quantity]);

  return (
    <CartTableRow
      bookInfo={bookInfo}
      decreaseQuantity={decreaseBooksQuantity}
      increaseQuantity={increaseBooksQuantity}
      index={index}
      totalPricePerBook={totalPricePerBook}
      onDeleteBook={onDeleteBook}
    />
  );
};

CartTableRowComponent.displayName = 'RowComponent';

export { CartTableRowComponent as CartTableRow };
