import React, { useEffect } from 'react';

import { EFetchStatuses } from '../../enums';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectBooks, selectBooksFetchingStatus } from '../../redux/store';
import { getBooks } from '../../redux/thunks';
import { ContentLoader } from '../ContentLoader';

import { Cards } from './Cards';

const CardsComponent: React.FC = () => {
  const books = useAppSelector(selectBooks);
  const fetchStatus = useAppSelector(selectBooksFetchingStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (fetchStatus === EFetchStatuses.pending) {
    return (<ContentLoader />);
  }

  return (<Cards books={books ?? []} />);
};

CardsComponent.displayName = 'BooksListComponent';

export { CardsComponent as Cards };
