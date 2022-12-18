import React, { useMemo } from 'react';

import { Page } from '../../components/Page';
import { ShoppingCart } from '../../components/ShoppingCart';
import { CartActionButtons } from '../../components/ShoppingCart/CartActionButtons';
import { CartTotalPrice } from '../../components/ShoppingCart/ShoppingCartTotalPrice';
import { MINIMAL_BOOKS_QUANTITY, RUBLE_SIGN } from '../../constants';
import { useAppSelector } from '../../redux/hooks';
import { selectUserSavings } from '../../redux/store';

export const ShoppingCartPage: React.FC = () => {
  const { cartValue } = useAppSelector(selectUserSavings);

  const orderPrice = cartValue.reduce<number>((acc, book) => {
    const booksQuantity = book.quantity ?? MINIMAL_BOOKS_QUANTITY;
    // eslint-disable-next-line no-param-reassign
    acc += (book.price * booksQuantity);

    return acc;
  }, 0);

  const subTitle = useMemo(() => (!cartValue.length
    ? 'В Вашей корзине пока пусто.'
    : `В Вашей корзине ${cartValue.length} книг на общую сумму ${orderPrice} ${RUBLE_SIGN}`
  ), [cartValue.length, orderPrice]);

  return (
    <Page subtitle={subTitle} title="Корзина">
      {Boolean(cartValue.length) && (<ShoppingCart orderPrice={orderPrice} selectedBooks={[...cartValue]} />)}
      <CartTotalPrice totalPrice={orderPrice} />
      <CartActionButtons />
    </Page>
  );
};

ShoppingCartPage.displayName = 'ShoppingCartPage';
