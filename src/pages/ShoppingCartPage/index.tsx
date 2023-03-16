import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useMemo } from 'react';

import { Page } from '../../components/Page';
import { ShoppingCart, CartTotalPrice, CartActionButtons } from '../../components/ShoppingCart';
import { bookWordForms, RUBLE_SIGN } from '../../constants';
import { savingsStore, userStore } from '../../stores';
import { getTotalPrice, pluralize } from '../../utils';

const ShoppingCartPage: React.FC = () => {
  const cartValue = toJS(savingsStore.cartValue);
  const favorites = toJS(savingsStore.favorites);
  const purchases = toJS(savingsStore.purchases);
  const { userId, displayName, email, isAnonymous } = userStore.user;

  const { totalPrice, bookQuantity } = getTotalPrice(cartValue);

  const pluralizedBookWord = useMemo(() => pluralize({ quantity: bookQuantity, textForms: bookWordForms }), [bookQuantity]);

  const subTitle = useMemo(() => {
    const emptyTitle = isAnonymous ? 'В Вашей корзине ничего нет.' : `${displayName || email}, в Вашей корзине ничего нет.`;
    const title = isAnonymous
      ? `В Вашей корзине ${bookQuantity} ${pluralizedBookWord} на общую сумму ${totalPrice} ${RUBLE_SIGN}`
      : `${displayName || email}, в Вашей корзине ${bookQuantity} ${pluralizedBookWord} на общую сумму ${totalPrice} ${RUBLE_SIGN}`;

    return (!cartValue.length ? emptyTitle : title);
  }, [isAnonymous, displayName, email, bookQuantity, pluralizedBookWord, totalPrice, cartValue.length]);

  return (
    <Page subtitle={subTitle} title="Корзина">
      {cartValue.length
        ? (
          <>
            <ShoppingCart orderPrice={totalPrice} selectedBooks={[...cartValue]} />
            <CartTotalPrice totalPrice={totalPrice} />
            <CartActionButtons savings={{ cartValue, favorites, purchases }} userId={userId} />
          </>
        )
        : null}
    </Page>
  );
};

ShoppingCartPage.displayName = 'ShoppingCartPage';

const ObservableShoppingCartPage = observer(ShoppingCartPage);

export { ObservableShoppingCartPage as ShoppingCartPage };
