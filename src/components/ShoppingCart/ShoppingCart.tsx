import React from 'react';

import { CartTableRow } from './CartTableRow';
import { TShoppingCartProps } from './ShoppingCart.props';
import { CartTotalPrice } from './ShoppingCartTotalPrice';

import styles from './ShoppingCart.module.css';

const ShoppingCart: React.FC<TShoppingCartProps> = ({ selectedBooks, orderPrice }) => (
  <div className={styles.cart}>
    <ul className={styles.table}>
      {
        selectedBooks.map((book, index) => (<CartTableRow bookInfo={book} index={index} key={String(book.id)} />))
      }
    </ul>
    <CartTotalPrice totalPrice={orderPrice} />
  </div>
);

ShoppingCart.displayName = 'ShoppingCart';

export { ShoppingCart };
