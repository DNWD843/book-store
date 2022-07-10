import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { EFetchStatuses } from '../../enums';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { bookDetailsActions } from '../../redux/reducers/bookDetailsReducer';
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

  useEffect(() => {
    if (!bookId) return;
    dispatch(getBookById(bookId));

    return () => {
      dispatch(clearBookDetailsState());
    };
  }, [bookId, clearBookDetailsState, dispatch]);

  if (fetchStatus === EFetchStatuses.loading) {
    return (<ContentLoader />);
  }

  if (!bookInfo) {
    return (<NotFoundPage />);
  }

  return (<BookDetails {...bookInfo} />);
};

BookDetailsComponent.displayName = 'BookDetailsComponent';

export { BookDetailsComponent as BookDetails };
