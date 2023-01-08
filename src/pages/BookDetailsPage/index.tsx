import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { BookDetails } from '../../components/BookDetails';
import { ScreenLoader } from '../../components/Loaders';
import { Page } from '../../components/Page';
import { EFetchStatuses } from '../../enums';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { bookDetailsActions } from '../../redux/slices/bookDetailsSlice';
import { selectBookDetails, storageActions } from '../../redux/store';
import { getBookById } from '../../redux/thunks';
import { TBookInfo, TUrlParams } from '../../types';
import { storage, storageKeys } from '../../utils';
import { ContentErrorPage } from '../ContentErrorPage';
import { NotFoundPage } from '../NotFoundPage';

export const BookDetailsPage: React.FC = () => {
  const { book, status: fetchingStatus } = useAppSelector(selectBookDetails);
  const dispatch = useAppDispatch();
  const { bookId = '' } = useParams<TUrlParams>();
  const { setBookDetails, clearBookDetailsState } = bookDetailsActions;
  const savedBookRef = useRef<TBookInfo | null>(storage.getData<TBookInfo>(storageKeys.BOOK_DETAILS));
  const wasRequestedRef = useRef<boolean>(false);

  useEffect(() => () => {
    dispatch(clearBookDetailsState());
    dispatch(storageActions.removeBookDetails);
    storage.deleteData(storageKeys.BOOK_DETAILS);
  }, [clearBookDetailsState, dispatch]);

  if (!book && savedBookRef.current) {
    dispatch(setBookDetails(savedBookRef.current));
  }

  if (!book && !savedBookRef.current && !wasRequestedRef.current && fetchingStatus === EFetchStatuses.fulfilled) {
    wasRequestedRef.current = true;
    dispatch(getBookById(bookId))
      .then((res) => {
        dispatch(storageActions.setBookDetails);
        storage.setData(storageKeys.BOOK_DETAILS, res.payload);
      });
  }

  return (
    <Page key="page" title="Описание книги">
      {fetchingStatus === EFetchStatuses.rejected ? (<ContentErrorPage />) : null}
      {book ? (<BookDetails book={book} />) : null}
      {!book && fetchingStatus === EFetchStatuses.fulfilled ? (<NotFoundPage />) : null}
      { fetchingStatus === EFetchStatuses.pending ? (<ScreenLoader />) : null }
    </Page>
  );
};

BookDetailsPage.displayName = 'BookDetailsPage';
