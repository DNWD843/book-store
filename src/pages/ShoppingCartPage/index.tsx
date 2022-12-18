import React, { useMemo } from 'react';

import { Page } from '../../components/Page';
import { ShoppingCart, CartTotalPrice, CartActionButtons } from '../../components/ShoppingCart';
import { MINIMAL_BOOKS_QUANTITY, RUBLE_SIGN } from '../../constants';
import { useAppSelector } from '../../redux/hooks';
import { selectUserData, selectUserSavings } from '../../redux/store';

export const ShoppingCartPage: React.FC = () => {
  const { cartValue, favorites } = useAppSelector(selectUserSavings);
  const { userId, displayName, email, isAnonymous } = useAppSelector(selectUserData);

  const orderPrice = cartValue.reduce<number>((acc, book) => {
    const booksQuantity = book.quantity ?? MINIMAL_BOOKS_QUANTITY;
    // eslint-disable-next-line no-param-reassign
    acc += (book.price * booksQuantity);

    return acc;
  }, 0);

  const subTitle = useMemo(() => {
    const emptyTitle = isAnonymous ? 'В Вашей корзине пока пусто.' : `${displayName || email}, в Вашей корзине пока пусто.`;
    const title = isAnonymous
      ? `В Вашей корзине ${cartValue.length} книг на общую сумму ${orderPrice} ${RUBLE_SIGN}`
      : `${displayName || email}, в Вашей корзине ${cartValue.length} книг на общую сумму ${orderPrice} ${RUBLE_SIGN}`;

    return (!cartValue.length ? emptyTitle : title);
  }, [cartValue.length, displayName, email, isAnonymous, orderPrice]);

  return (
    <Page subtitle={subTitle} title="Корзина">
      {Boolean(cartValue.length) && (<ShoppingCart orderPrice={orderPrice} selectedBooks={[...cartValue]} />)}
      {cartValue.length
        ? (
          <>
            <CartTotalPrice totalPrice={orderPrice} />
            <CartActionButtons savings={{ cartValue, favorites }} userId={userId} />
          </>
        )
        : null}
    </Page>
  );
};

ShoppingCartPage.displayName = 'ShoppingCartPage';
