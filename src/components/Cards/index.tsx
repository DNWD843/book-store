import React from 'react';

import { useAppSelector } from '../../redux/hooks';
import { selectBooksCollection } from '../../redux/store';
import { Card } from '../Card';

import styles from './Cards.module.css';

const CardsComponent: React.FC = () => {
  const booksCollection = useAppSelector(selectBooksCollection) || [];

  return (
    <ul className={styles.list}>
      {booksCollection.map((book) => (
        <li className={styles.listItem} key={book.id.toString()}>
          <Card {...book} />
        </li>
      ))}
    </ul>
  );
};

CardsComponent.displayName = 'BooksList';

export { CardsComponent as Cards };
