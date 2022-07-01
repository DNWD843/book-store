import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { EFetchStatuses } from '../../enums';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { bookDetailsActions } from '../../redux/reducers/bookDetailsReducer';
import { selectBookDetails, selectBookDetailsFetchingStatus } from '../../redux/store';
import { getBookById } from '../../redux/thunks';
import { TUrlParams } from '../../types';
import { Loader } from '../Loader';

import { BookDetails } from './BookDetails';

const BookDetailsComponent: React.FC = () => {
  const { bookId } = useParams<TUrlParams>();
  const dispatch = useAppDispatch();
  const { clearBookDetailsState } = bookDetailsActions;
  const bookInfo = useAppSelector(selectBookDetails);
  const fetchStatus = useAppSelector(selectBookDetailsFetchingStatus);

  useEffect(() => {
    if (!bookInfo) {
      dispatch(getBookById(Number(bookId)));
    }

    return () => {
      if (bookInfo) {
        dispatch(clearBookDetailsState());
      }
    };
  }, [bookId, bookInfo, clearBookDetailsState, dispatch]);

  if (fetchStatus === EFetchStatuses.loading) {
    return (<Loader />);
  }

  if (!bookInfo) {
    return (<NotFoundPage />);
  }

  return (<BookDetails {...bookInfo} />);
};

export { BookDetailsComponent as BookDetails };
