import React from 'react';

import { mockedData } from '../../constants';
import { ShoppingCartItem } from '../ShoppingCartItem';

import styles from './ShoppingCartTable.module.css';

export const ShoppingCartTable: React.FC = () => (
  <ul className={styles.table}>
    {
      mockedData.map((book, index) => (<ShoppingCartItem bookInfo={book} index={index} />))
    }
  </ul>
);
