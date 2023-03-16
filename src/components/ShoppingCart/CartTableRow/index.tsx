import { observer } from 'mobx-react-lite';
import React, { useCallback, useMemo } from 'react';

import { MINIMAL_BOOKS_QUANTITY } from '../../../constants';
import { savingsStore } from '../../../stores';
import { TBookInfo } from '../../../types';

import { CartTableRow } from './CartTableRow';

const CartTableRowComponent: React.FC<{ bookInfo: TBookInfo, index: number }> = ({ bookInfo, index }) => {
  const { increaseBookQuantity, decreaseBookQuantity, updateSavingsInDB, removeFromCart } = savingsStore;

  const onDeleteBook = async () => {
    removeFromCart(bookInfo);
    await updateSavingsInDB();
  };

  const onIncrease = useCallback((id: TBookInfo['id']) => async () => {
    increaseBookQuantity(id);
    await updateSavingsInDB();
  }, [increaseBookQuantity, updateSavingsInDB]);

  const onDecrease = useCallback((id: TBookInfo['id']) => async () => {
    decreaseBookQuantity(id);
    await updateSavingsInDB();
  }, [decreaseBookQuantity, updateSavingsInDB]);

  const totalPricePerBook = useMemo(() => bookInfo.price * (bookInfo.quantity ?? MINIMAL_BOOKS_QUANTITY), [bookInfo.price, bookInfo.quantity]);

  return (
    <CartTableRow
      bookInfo={bookInfo}
      decreaseQuantity={onDecrease(bookInfo.id)}
      increaseQuantity={onIncrease(bookInfo.id)}
      index={index}
      totalPricePerBook={totalPricePerBook}
      onDeleteBook={onDeleteBook}
    />
  );
};

CartTableRowComponent.displayName = 'RowComponent';

const ObservableCartTableRowComponent = observer(CartTableRowComponent);

export { ObservableCartTableRowComponent as CartTableRow };
