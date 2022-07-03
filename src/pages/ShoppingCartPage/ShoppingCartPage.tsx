import React from 'react';

// import { ShoppingCartItem } from '../../components/ShoppingCartItem';
import { ShoppingCartTable } from '../../components/ShoppingCartTable';
import { mockedData, RUBLE_SIGN } from '../../constants';

import styles from './ShoppingCartPage.module.css';

export const ShoppingCartPage: React.FC = () => {
  const selectedBooks = mockedData;

  return (
    <div className={styles.cart}>
      <h2 className={styles.title}>Корзина</h2>
      <p className={styles.subtitle}>{`В корзине ${selectedBooks.length} книг на сумму 1000 ${RUBLE_SIGN} `}</p>
      <ShoppingCartTable />
      {/* <ul className={styles.list}>
        {
          selectedBooks.map((book) => (<ShoppingCartItem {...book} />))
        }
      </ul> */}
    </div>
  );
};
