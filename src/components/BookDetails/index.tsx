import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';

import { EFetchStatuses } from '../../enums';
import { useUserSavingsHandlers } from '../../hooks/useUserSavingsHandlers';
import { ContentErrorPage } from '../../pages/ContentErrorPage';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { bookDetailsActions } from '../../redux/slices/bookDetailsSlice';
import { selectBookDetails, storageActions } from '../../redux/store';
import { getBookById } from '../../redux/thunks';
import { TBookInfo, TUrlParams } from '../../types';
import { storage, storageKeys } from '../../utils';
import { ContentLoader } from '../ContentLoader';
import { Page } from '../Page';

import { BookDetails } from './BookDetails';

const BookDetailsComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { bookId = '' } = useParams<TUrlParams>();
  const { book, status: fetchingStatus } = useAppSelector(selectBookDetails);

  const { setBookDetails } = bookDetailsActions;
  const { isAnonymous, isAddedToFavorites, isAddedToCart, handleBookmarkClick, handleCartButtonClick } = useUserSavingsHandlers(bookId);

  const savedBookRef = useRef<TBookInfo | null>(null);

  if (!book && !savedBookRef.current && fetchingStatus === EFetchStatuses.fulfilled) {
    dispatch(storageActions.getBookDetails);
    savedBookRef.current = storage.getData<TBookInfo>(storageKeys.BOOK_DETAILS);
  }

  if (!book && savedBookRef.current) {
    dispatch(setBookDetails(savedBookRef.current));
  }

  if (!book && !savedBookRef.current && fetchingStatus === EFetchStatuses.fulfilled) {
    dispatch(getBookById(bookId))
      .then(({ payload }) => {
        dispatch(storageActions.setBookDetails);
        storage.setData(storageKeys.BOOK_DETAILS, payload);
      });
  }

  if (fetchingStatus === EFetchStatuses.pending) {
    return (<ContentLoader />);
  }

  if (fetchingStatus === EFetchStatuses.rejected) {
    return (<ContentErrorPage />);
  }

  const onBookmarkClick = () => {
    if (!book) return;

    handleBookmarkClick(book);
  };

  const onCartButtonClick = () => {
    if (!book) return;

    handleCartButtonClick(book);
  };

  return (
    <Page title="Описание книги">
      {book
        ? (
          <BookDetails
            {...book}
            isAddedToCart={isAddedToCart}
            isAddedToFavorites={isAddedToFavorites}
            isAnonymous={isAnonymous}
            onBookmarkButtonClick={onBookmarkClick}
            onCartButtonClick={onCartButtonClick}
          />
        )
        : (<NotFoundPage />)}
    </Page>
  );
};

BookDetailsComponent.displayName = 'BookDetailsComponent';

export { BookDetailsComponent as BookDetails };
