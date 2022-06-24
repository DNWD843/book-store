import React from 'react';

import { TBook } from '../../types';
import { Card } from '../Card';

import styles from './Cards.module.css';

export const Cards: React.FC<{ books?: TBook[] }> = ({ books }) => {
  if (!books) return null;

  return (
    <ul className={styles.list}>
      {books.map(({ id, ...book }) => (
        <li className={styles.listItem} key={id.toString()}>
          <Card {...book} />
        </li>
      ))}
    </ul>
  );
};
