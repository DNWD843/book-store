import React, { useEffect } from 'react';

import { ONE_DAY_TIMESTAMP } from '../../constants';
import { EFetchStatuses } from '../../enums';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectBooksCollection, selectBooksFetchingStatus, selectFetchingDate, serviceActions } from '../../redux/store';
import { getBooks } from '../../redux/thunks';
import { checkNeedToDataUpdate, storageKeys, storage } from '../../utils';
import { Card } from '../Card';
import { ContentLoader } from '../ContentLoader';

import styles from './Cards.module.css';

const CardsComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const booksCollection = useAppSelector(selectBooksCollection);
  const booksFetchingDate = useAppSelector(selectFetchingDate);
  const fetchBooksStatus = useAppSelector(selectBooksFetchingStatus);

  useEffect(() => {
    if (booksCollection) {
      storage.setData(storageKeys.BOOKS, { books: booksCollection, updatedAt: booksFetchingDate });
      dispatch(serviceActions.setBooks);
    }
  }, [booksCollection, booksFetchingDate, dispatch]);

  if (fetchBooksStatus === EFetchStatuses.pending) {
    return (<ContentLoader />);
  }

  if (!booksCollection) return null;

  const needsToUpdate = checkNeedToDataUpdate({ date: booksFetchingDate!, limit: ONE_DAY_TIMESTAMP });

  if (needsToUpdate) {
    dispatch(getBooks()).then((res) => {
      storage.setData(storageKeys.BOOKS, res.payload);
      dispatch(serviceActions.setBooks);
    })
      .catch((err) => { console.error(err); });
  }

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
