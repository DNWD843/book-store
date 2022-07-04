import React, { useEffect } from 'react';

import { EFetchStatuses } from '../../enums';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { booksActions } from '../../redux/reducers/booksReducer';
import { selectBooks, selectBooksFetchingStatus } from '../../redux/store';
import { getBooks } from '../../redux/thunks';
import { ContentLoader } from '../ContentLoader';

import { Cards } from './Cards';

const CardsComponent: React.FC = () => {
  const books = useAppSelector(selectBooks);
  const fetchStatus = useAppSelector(selectBooksFetchingStatus);
  const dispatch = useAppDispatch();
  const { clearBooksState } = booksActions;

  useEffect(() => {
    if (!books.length) {
      dispatch(getBooks());
    }

    return () => {
      if (books.length) {
        dispatch(clearBooksState());
      }
    };
  }, [books, clearBooksState, dispatch]);

  if (fetchStatus === EFetchStatuses.loading) {
    return (<ContentLoader />);
  }

  return (<Cards books={books ?? []} />);
};

CardsComponent.displayName = 'BooksListController';

export { CardsComponent as Cards };
