import React, { useEffect } from 'react';

import { EFetchStatuses } from '../../enums';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectBooks, selectStatus } from '../../redux/store';
import { getBooks } from '../../redux/thunks';
import { Loader } from '../Loader';

import { Cards } from './Cards';

const CardsComponent = () => {
  const books = useAppSelector(selectBooks);
  const fetchStatus = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <>
      {fetchStatus === EFetchStatuses.loading && (<Loader />)}
      <Cards books={books ?? []} />
    </>
  );
};

CardsComponent.displayName = 'CardsContainer';

export { CardsComponent as Cards };
