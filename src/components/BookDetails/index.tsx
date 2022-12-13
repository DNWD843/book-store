import React from 'react';
import { useParams } from 'react-router-dom';

import { useUserSavingsHandlers } from '../../hooks/useUserSavingsHandlers';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { useAppSelector } from '../../redux/hooks';
import { selectBooksCollection } from '../../redux/store';
import { TUrlParams } from '../../types';
import { Page } from '../Page';

import { BookDetails } from './BookDetails';

const BookDetailsComponent: React.FC = () => {
  const { bookId = '' } = useParams<TUrlParams>();
  const booksCollection = useAppSelector(selectBooksCollection);
  const bookInfo = booksCollection?.find((book) => book.id === bookId);

  const { isAnonymous, isAddedToFavorites, isAddedToCart, handleBookmarkClick, handleCartButtonClick } = useUserSavingsHandlers(bookId);

  const onCartButtonClick = () => {
    if (!bookInfo) return;

    handleCartButtonClick(bookInfo);
  };

  return (
    <Page title="Описание книги">
      {bookInfo
        ? (
          <BookDetails
            {...bookInfo}
            isAddedToCart={isAddedToCart}
            isAddedToFavorites={isAddedToFavorites}
            isAnonymous={isAnonymous}
            onBookmarkButtonClick={handleBookmarkClick}
            onCartButtonClick={onCartButtonClick}
          />
        )
        : (<NotFoundPage />)}
    </Page>
  );
};

BookDetailsComponent.displayName = 'BookDetailsComponent';

export { BookDetailsComponent as BookDetails };
