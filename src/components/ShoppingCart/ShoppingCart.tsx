import React from 'react';

import { RUBLE_SIGN } from '../../constants';

import { CartTableRow } from './CartTableRow';
import { TShoppingCartProps } from './ShoppingCart.props';
import { CartTotalPrice } from './ShoppingCartTotalPrice';

import styles from './ShoppingCartPage.module.css';

const ShoppingCart: React.FC<TShoppingCartProps> = ({ selectedBooks, orderPrice, isEmpty }) => (
  <div className={styles.cart}>
    <h2 className={styles.title}>Корзина</h2>
    <p className={styles.subTitle}>
      {
        isEmpty
          ? 'В Вашей корзине пока пусто.'
          : `В Вашей корзине ${selectedBooks.length} книг на общую сумму ${orderPrice} ${RUBLE_SIGN} `
      }
    </p>
    {!isEmpty && (
      <>
        <ul className={styles.table}>
          {
            selectedBooks.map((book, index) => (<CartTableRow bookInfo={book} index={index} key={String(book.id)} />))
          }
        </ul>
        <CartTotalPrice totalPrice={orderPrice} />
      </>
    )}
  </div>
);

ShoppingCart.displayName = 'ShoppingCart';

export { ShoppingCart };
