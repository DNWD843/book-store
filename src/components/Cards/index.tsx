import React, { memo } from 'react';

import { TBookInfo } from '../../types';
import { Card } from '../Card';

import styles from './Cards.module.css';

const CardsComponent: React.FC<{ books: TBookInfo[] }> = ({ books = [] }) => (
  <ul className={styles.list}>
    {books.map((book) => (
      <li className={styles.listItem} key={book.id.toString()}>
        <Card {...book} />
      </li>
    ))}
  </ul>
);

CardsComponent.displayName = 'Cards';

const MemoCards = memo(CardsComponent);
export { MemoCards as Cards };
