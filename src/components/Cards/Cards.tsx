import React from 'react';

import { TBookInfo } from '../../types';
import { Card } from '../Card';

import styles from './Cards.module.css';

const Cards: React.FC<{ books?: TBookInfo[] }> = ({ books }) => {
  if (!books) return null;

  return (
    <ul className={styles.list}>
      {books.map((book) => (
        <li className={styles.listItem} key={book.id.toString()}>
          <Card {...book} />
        </li>
      ))}
    </ul>
  );
};

Cards.displayName = 'BooksList';

export { Cards };
