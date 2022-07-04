import React from 'react';

import { ShoppingCartTable } from '../../components/ShoppingCartTable';
import { ShoppingCartTotalPrice } from '../../components/ShoppingCartTotalPrice';
import { mockedData, RUBLE_SIGN } from '../../constants';

import styles from './ShoppingCartPage.module.css';

const ShoppingCartPage: React.FC = () => {
  const selectedBooks = mockedData;
  const totalPrice = 1000;

  return (
    <div className={styles.cart}>
      <h2 className={styles.title}>Корзина</h2>
      <p className={styles.subTitle}>{`В Вашей корзине ${selectedBooks.length} книг на сумму 1000 ${RUBLE_SIGN} `}</p>
      <ShoppingCartTable selectedBooks={selectedBooks} />
      <ShoppingCartTotalPrice totalPrice={totalPrice} />
    </div>
  );
};

ShoppingCartPage.displayName = 'ShoppingCartPage';

export { ShoppingCartPage };
