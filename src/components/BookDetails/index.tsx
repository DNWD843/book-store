import React from 'react';
import { useParams } from 'react-router-dom';

import { useUserSavingsHandlers } from '../../hooks/useUserSavingsHandlers';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { useAppSelector } from '../../redux/hooks';
import { selectBooksCollection } from '../../redux/store';
import { TUrlParams } from '../../types';

import { BookDetails } from './BookDetails';

const BookDetailsComponent: React.FC = () => {
  const { bookId = '' } = useParams<TUrlParams>();
  const booksCollection = useAppSelector(selectBooksCollection);
  const bookInfo = booksCollection?.find((book) => book.id === bookId);

  const { isAnonymous, isAddedToFavorites, isAddedToCart, handleBookmarkClick, handleCartButtonClick } = useUserSavingsHandlers(bookId);

  if (!bookInfo) {
    return (<NotFoundPage />);
  }

  const onCartButtonClick = () => {
    handleCartButtonClick(bookInfo);
  };

  return (
    <BookDetails
      {...bookInfo}
      isAddedToCart={isAddedToCart}
      isAddedToFavorites={isAddedToFavorites}
      isAnonymous={isAnonymous}
      onBookmarkButtonClick={handleBookmarkClick}
      onCartButtonClick={onCartButtonClick}
    />
  );
};

BookDetailsComponent.displayName = 'BookDetailsComponent';

export { BookDetailsComponent as BookDetails };
