import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { useUserSavingsHandlers } from '../../hooks';
import { TUrlParams } from '../../types';

import { BookDetails } from './BookDetails';
import { TBookDetailsComponentProps } from './BookDetails.props';

const BookDetailsComponent: React.FC<TBookDetailsComponentProps> = ({ book }) => {
  const { bookId = '' } = useParams<TUrlParams>();
  const { isAnonymous, isAddedToFavorites, isAddedToCart, handleBookmarkClick, handleCartButtonClick } = useUserSavingsHandlers(bookId);

  const onBookmarkClick = useCallback(() => {
    handleBookmarkClick(book);
  }, [book, handleBookmarkClick]);

  const onCartButtonClick = useCallback(() => {
    handleCartButtonClick(book);
  }, [book, handleCartButtonClick]);

  return (
    <BookDetails
      {...book}
      isAddedToCart={isAddedToCart}
      isAddedToFavorites={isAddedToFavorites}
      isAnonymous={isAnonymous}
      onBookmarkButtonClick={onBookmarkClick}
      onCartButtonClick={onCartButtonClick}
    />
  );
};

BookDetailsComponent.displayName = 'BookDetailsComponent';

export { BookDetailsComponent as BookDetails };
