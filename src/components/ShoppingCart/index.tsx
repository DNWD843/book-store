import React from 'react';

import { MINIMAL_BOOKS_QUANTITY } from '../../constants';
import { useAppSelector } from '../../redux/hooks';
import { selectUserSavings } from '../../redux/store';

import { ShoppingCart } from './ShoppingCart';

const ShoppingCartComponent = () => {
  const { cartValue } = useAppSelector(selectUserSavings);

  const orderPrice = cartValue.reduce<number>((acc, book) => {
    const booksQuantity = book.quantity ?? MINIMAL_BOOKS_QUANTITY;
    // eslint-disable-next-line no-param-reassign
    acc += (book.price * booksQuantity);

    return acc;
  }, 0);

  return (
    <ShoppingCart isEmpty={!cartValue.length} orderPrice={orderPrice} selectedBooks={[...cartValue]} />
  );
};

ShoppingCartComponent.displayName = 'ShoppingCartComponent';

export { ShoppingCartComponent as ShoppingCart };
