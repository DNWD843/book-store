import React from 'react';

import { EFetchStatuses } from '../../enums';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectBooksCollection, selectBooksFetchingStatus } from '../../redux/store';
import { getBooks } from '../../redux/thunks';
import { keys, storage } from '../../utils';
import { Card } from '../Card';
import { ContentLoader } from '../ContentLoader';

import styles from './Cards.module.css';

const CardsComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const booksCollection = useAppSelector(selectBooksCollection);
  const fetchBooksStatus = useAppSelector(selectBooksFetchingStatus);
  const booksStatus = useAppSelector(selectBooksFetchingStatus);

  if (fetchBooksStatus === EFetchStatuses.pending) {
    return (<ContentLoader />);
  }

  if (!booksCollection) return null;

  if ((Date.now() - booksCollection.updatedAt) > 86400000) {
    dispatch(getBooks()).then((res) => {
      storage.setData(keys.BOOKS, res.payload);
    });
  }

  if (booksStatus === EFetchStatuses.pending) {
    return (
      <div style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ContentLoader />
      </div>
    );
  }

  return (
    <ul className={styles.list}>
      {booksCollection.books.map((book) => (
        <li className={styles.listItem} key={book.id.toString()}>
          <Card {...book} />
        </li>
      ))}
    </ul>
  );
};

CardsComponent.displayName = 'BooksList';

export { CardsComponent as Cards };
