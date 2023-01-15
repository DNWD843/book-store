import React from 'react';

import { RUBLE_SIGN } from '../../../constants';

import styles from './CartTotalPrice.module.css';

const CartTotalPrice: React.FC<{ totalPrice: number }> = ({ totalPrice }) => (
  <div className={styles.totalPriceRow}>
    <span className={styles.totalPriceTitle}>Итого:</span>
    <span className={styles.totalPriceValue}>{`${totalPrice} ${RUBLE_SIGN}`}</span>
  </div>
);

CartTotalPrice.displayName = 'TotalPrice';

export { CartTotalPrice };
