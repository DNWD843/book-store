import React, { useEffect } from 'react';

import './App.css';
import { ONE_DAY_TIMESTAMP } from '../../constants';
import { EFetchStatuses } from '../../enums';
import { withReduxStore } from '../../provider/withReduxStore';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { authActions, booksActions } from '../../redux/slices';
import { selectAuthStatus, selectBooksFetchingStatus, storageActions } from '../../redux/store';
import { getBooks, getUserSavings } from '../../redux/thunks';
import { IBooksCollection, TUserData } from '../../types';
import { checkNeedToDataUpdate, storage, storageKeys } from '../../utils';
import { ScreenLoader } from '../Loaders';

import { App } from './App';

const AppComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { setUserToStore } = authActions;
  const { setBooksToStore } = booksActions;
  const authStatus = useAppSelector(selectAuthStatus);
  const booksStatus = useAppSelector(selectBooksFetchingStatus);

  useEffect(() => {
    dispatch(storageActions.getUserInfo);
    const savedUser = storage.getData<TUserData>(storageKeys.USER);

    dispatch(storageActions.getBooks);
    const savedBooks = storage.getData<IBooksCollection>(storageKeys.BOOKS);

    if (savedUser) {
      dispatch(getUserSavings(savedUser.userId))
        .then(() => { dispatch(setUserToStore(savedUser)); });
    }

    if (!savedBooks
      || (savedBooks.books && savedBooks.updatedAt && checkNeedToDataUpdate({ date: savedBooks.updatedAt, limit: ONE_DAY_TIMESTAMP }))) {
      dispatch(getBooks()).then((res) => {
        dispatch(storageActions.setBooks);
        storage.setData(storageKeys.BOOKS, res.payload as Object);
      })
        // eslint-disable-next-line no-console
        .catch((err) => { console.error(err); });
    } else {
      dispatch(setBooksToStore(savedBooks));
    }
  }, [dispatch, setBooksToStore, setUserToStore]);

  const isLoading = authStatus === EFetchStatuses.pending || booksStatus === EFetchStatuses.pending;

  return (
    <>
      <App />
      {isLoading
        ? (<ScreenLoader />)
        : null}
    </>
  );
};

AppComponent.displayName = 'AppComponent';

export default withReduxStore(AppComponent);
