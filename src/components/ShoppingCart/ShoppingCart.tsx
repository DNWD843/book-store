import React from 'react';

import { CartTableRow } from './CartTableRow';
import { TShoppingCartProps } from './ShoppingCart.props';

import styles from './ShoppingCart.module.css';

const ShoppingCart: React.FC<TShoppingCartProps> = ({ selectedBooks }) => (
  <ul className={styles.table}>
    {
      selectedBooks.map((book, index) => (<CartTableRow bookInfo={book} index={index} key={String(book.id)} />))
    }
  </ul>
);

ShoppingCart.displayName = 'ShoppingCart';

export { ShoppingCart };
