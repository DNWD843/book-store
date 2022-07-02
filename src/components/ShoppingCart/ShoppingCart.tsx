import React from 'react';

import { mockedData, RUBLE_SIGN } from '../../constants';
import { ShoppingCartItem } from '../ShoppingCartItem';

import styles from './ShoppingCart.module.css';

export const ShoppingCart: React.FC = () => {
  const selectedBooks = mockedData;

  return (
    <div className={styles.cart}>
      <h2 className={styles.title}>Корзина</h2>
      <p className={styles.subtitle}>{`В корзине ${selectedBooks.length} книг на сумму 1000 ${RUBLE_SIGN} `}</p>
      <ul>
        {
          selectedBooks.map((book) => (<ShoppingCartItem {...book} />))
        }
      </ul>
    </div>
  );
};
