import React from 'react';

import { EFetchStatuses } from '../../enums';
import { useAppSelector } from '../../redux/hooks';
import { selectBooks, selectBooksFetchingStatus } from '../../redux/store';
import { Card } from '../Card';
import { ContentLoader } from '../ContentLoader';

import styles from './Cards.module.css';

const CardsComponent: React.FC = () => {
  const books = useAppSelector(selectBooks);
  const fetchBooksStatus = useAppSelector(selectBooksFetchingStatus);

  if (fetchBooksStatus === EFetchStatuses.pending) {
    return (<ContentLoader />);
  }

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

CardsComponent.displayName = 'BooksList';

export { CardsComponent as Cards };
