import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { NotFoundPage } from '../../pages/NotFoundPage';
import { useAppSelector } from '../../redux/hooks';
import { selectBooksCollection, selectUserData, selectUserSavings } from '../../redux/store';
import { TUrlParams } from '../../types';

import { BookDetails } from './BookDetails';

const BookDetailsComponent: React.FC = () => {
  const { bookId = '' } = useParams<TUrlParams>();
  const booksCollection = useAppSelector(selectBooksCollection);
  const bookInfo = booksCollection?.find((book) => book.id === bookId);
  const { isAnonymous } = useAppSelector(selectUserData);

  const { favorites, cartValue } = useAppSelector(selectUserSavings);

  const isAddedToFavorites = useMemo(() => favorites.includes(bookId), [bookId, favorites]);
  const isAddedToCart = useMemo(() => cartValue.some((book) => book.id === bookId), [cartValue, bookId]);

  if (!bookInfo) {
    return (<NotFoundPage />);
  }

  return (
    <BookDetails
      {...bookInfo}
      isAddedToCart={isAddedToCart}
      isAddedToFavorites={isAddedToFavorites}
      isAnonymous={isAnonymous}
    />
  );
};

BookDetailsComponent.displayName = 'BookDetailsComponent';

export { BookDetailsComponent as BookDetails };
