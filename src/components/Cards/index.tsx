import React from 'react';

import { ONE_DAY_TIMESTAMP } from '../../constants';
import { EFetchStatuses } from '../../enums';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectBooksCollection, selectBooksFetchingStatus } from '../../redux/store';
import { getBooks } from '../../redux/thunks';
import { checkNeedToDataUpdate, keys, storage } from '../../utils';
import { Card } from '../Card';
import { ContentLoader } from '../ContentLoader';

import styles from './Cards.module.css';

const CardsComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const booksCollection = useAppSelector(selectBooksCollection);
  const fetchBooksStatus = useAppSelector(selectBooksFetchingStatus);

  if (fetchBooksStatus === EFetchStatuses.pending) {
    return (<ContentLoader />);
  }

  if (!booksCollection) return null;

  const needsToUpdate = checkNeedToDataUpdate({ date: booksCollection.updatedAt, limit: ONE_DAY_TIMESTAMP });

  if (needsToUpdate) {
    dispatch(getBooks()).then((res) => {
      storage.setData(keys.BOOKS, res.payload);
    });
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
