import React, { useMemo } from 'react';

import { Page } from '../../components/Page';
import { ShoppingCart, CartTotalPrice, CartActionButtons } from '../../components/ShoppingCart';
import { bookWordForms, RUBLE_SIGN } from '../../constants';
import { useAppSelector } from '../../redux/hooks';
import { selectUserData, selectUserSavings } from '../../redux/store';
import { getTotalPrice, pluralize } from '../../utils';

export const ShoppingCartPage: React.FC = () => {
  const { cartValue, favorites, purchases } = useAppSelector(selectUserSavings);
  const { userId, displayName, email, isAnonymous } = useAppSelector(selectUserData);

  const { totalPrice, booksQuantity } = getTotalPrice(cartValue);

  const pluralizedBookWord = useMemo(() => pluralize({ quantity: booksQuantity, textForms: bookWordForms }), [booksQuantity]);

  const subTitle = useMemo(() => {
    const emptyTitle = isAnonymous ? 'В Вашей корзине ничего нет.' : `${displayName || email}, в Вашей корзине ничего нет.`;
    const title = isAnonymous
      ? `В Вашей корзине ${booksQuantity} ${pluralizedBookWord} на общую сумму ${totalPrice} ${RUBLE_SIGN}`
      : `${displayName || email}, в Вашей корзине ${booksQuantity} ${pluralizedBookWord} на общую сумму ${totalPrice} ${RUBLE_SIGN}`;

    return (!cartValue.length ? emptyTitle : title);
  }, [isAnonymous, displayName, email, booksQuantity, pluralizedBookWord, totalPrice, cartValue.length]);

  return (
    <Page subtitle={subTitle} title="Корзина">
      {Boolean(cartValue.length) && (<ShoppingCart orderPrice={totalPrice} selectedBooks={[...cartValue]} />)}
      {cartValue.length
        ? (
          <>
            <CartTotalPrice totalPrice={totalPrice} />
            <CartActionButtons savings={{ cartValue, favorites, purchases }} userId={userId} />
          </>
        )
        : null}
    </Page>
  );
};

ShoppingCartPage.displayName = 'ShoppingCartPage';
