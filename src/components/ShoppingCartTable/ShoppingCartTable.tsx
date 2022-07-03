import React from 'react';

import { TBookInfo } from '../../types';
import { ShoppingCartTableRow } from '../ShoppingCartTableRow';

import styles from './ShoppingCartTable.module.css';

export const ShoppingCartTable: React.FC<{ selectedBooks: TBookInfo[] }> = ({ selectedBooks = [] }) => (
  <ul className={styles.table}>
    {
      selectedBooks.map((book, index) => (<ShoppingCartTableRow bookInfo={book} index={index} key={String(book.id)} />))
    }
  </ul>
);
