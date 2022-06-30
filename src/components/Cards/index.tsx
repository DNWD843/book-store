import React, { useEffect } from 'react';

import { EFetchStatuses } from '../../enums';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { booksActions } from '../../redux/reducers/booksReducer';
import { selectBooks, selectBooksFetchingStatus } from '../../redux/store';
import { getBooks } from '../../redux/thunks';
import { Loader } from '../Loader';

import { Cards } from './Cards';

const CardsComponent = () => {
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

  return (
    <>
      {fetchStatus === EFetchStatuses.loading && (<Loader />)}
      <Cards books={books ?? []} />
    </>
  );
};

CardsComponent.displayName = 'CardsContainer';

export { CardsComponent as Cards };
