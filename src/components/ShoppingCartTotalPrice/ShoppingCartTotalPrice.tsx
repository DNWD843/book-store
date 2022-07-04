import React from 'react';

import { RUBLE_SIGN } from '../../constants';

import styles from './ShoppingCartTotalPrice.module.css';

const ShoppingCartTotalPrice: React.FC<{ totalPrice: number }> = ({ totalPrice }) => (
  <div className={styles.totalPriceRow}>
    <span className={styles.totalPriceTitle}>Всего:</span>
    <span className={styles.totalPriceValue}>{`${totalPrice} ${RUBLE_SIGN}`}</span>
  </div>
);

ShoppingCartTotalPrice.displayName = 'TotalPrice';

export { ShoppingCartTotalPrice };
