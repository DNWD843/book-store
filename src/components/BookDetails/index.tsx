import React from 'react';
import { useParams } from 'react-router-dom';

import { NotFoundPage } from '../../pages/NotFoundPage';
import { useAppSelector } from '../../redux/hooks';
import { selectBooksCollection, selectUserData } from '../../redux/store';
import { TUrlParams } from '../../types';

import { BookDetails } from './BookDetails';

const BookDetailsComponent: React.FC = () => {
  const { bookId } = useParams<TUrlParams>();
  const booksCollection = useAppSelector(selectBooksCollection);
  const bookInfo = booksCollection?.find((book) => book.id === bookId);
  const { isAnonymous } = useAppSelector(selectUserData);

  if (!bookInfo) {
    return (<NotFoundPage />);
  }

  return (<BookDetails {...bookInfo} isAnonymous={isAnonymous} />);
};

BookDetailsComponent.displayName = 'BookDetailsComponent';

export { BookDetailsComponent as BookDetails };
