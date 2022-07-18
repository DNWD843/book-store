import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { EFetchStatuses } from '../../enums';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { bookDetailsActions } from '../../redux/slices/bookDetailsSlice';
import { selectBookDetails, selectBookDetailsFetchingStatus } from '../../redux/store';
import { getBookById } from '../../redux/thunks';
import { TUrlParams } from '../../types';
import { ContentLoader } from '../ContentLoader';

import { BookDetails } from './BookDetails';

const BookDetailsComponent: React.FC = () => {
  const { bookId } = useParams<TUrlParams>();
  const dispatch = useAppDispatch();
  const { clearBookDetailsState } = bookDetailsActions;
  const bookInfo = useAppSelector(selectBookDetails);
  const fetchStatus = useAppSelector(selectBookDetailsFetchingStatus);

  if (bookId && !bookInfo && fetchStatus === EFetchStatuses.fulfilled) {
    dispatch(getBookById(bookId));
  }

  useEffect(() => () => {
    if (bookInfo && fetchStatus === EFetchStatuses.fulfilled) {
      dispatch(clearBookDetailsState());
    }
  }, [bookInfo, clearBookDetailsState, dispatch, fetchStatus]);

  if (fetchStatus === EFetchStatuses.pending) {
    return (<ContentLoader />);
  }

  if (!bookInfo) {
    return (<NotFoundPage />);
  }

  return (<BookDetails {...bookInfo} />);
};

BookDetailsComponent.displayName = 'BookDetailsComponent';

export { BookDetailsComponent as BookDetails };
