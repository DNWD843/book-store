import React from 'react';

import { EFetchStatuses } from '../../enums';
import { useAppSelector } from '../../redux/hooks';
import { selectBooks, selectBooksFetchingStatus } from '../../redux/store';
import { ContentLoader } from '../ContentLoader';

import { Cards } from './Cards';

const CardsComponent: React.FC = () => {
  const books = useAppSelector(selectBooks);
  const fetchBooksStatus = useAppSelector(selectBooksFetchingStatus);

  if (fetchBooksStatus === EFetchStatuses.pending) {
    return (<ContentLoader />);
  }

  return (<Cards books={books || []} />);
};

CardsComponent.displayName = 'BooksListComponent';

export { CardsComponent as Cards };
