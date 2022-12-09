import React, { useEffect } from 'react';

import './App.css';
import { ONE_DAY_TIMESTAMP } from '../../constants';
import { EFetchStatuses } from '../../enums';
import { withReduxStore } from '../../provider/withReduxStore';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { authActions } from '../../redux/slices/authSlice';
import { booksActions } from '../../redux/slices/booksSlice';
import { userSavingsActions } from '../../redux/slices/userSavingsSlice';
import { selectAuthStatus, selectBooksFetchingStatus, storageActions } from '../../redux/store';
import { getBooks, getUserSavings } from '../../redux/thunks';
import { IBooksCollection, TUserData } from '../../types';
import { checkNeedToDataUpdate, storage, storageKeys } from '../../utils';
import { ContentLoader } from '../ContentLoader';

import { App } from './App';

const AppComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { setUserToStore } = authActions;
  const { setBooksToStore } = booksActions;
  const { setUserSavingsToStore } = userSavingsActions;
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
        storage.setData(storageKeys.BOOKS, res.payload);
      })
        .catch((err) => { console.error(err); });
    } else {
      dispatch(setBooksToStore(savedBooks));
    }
  }, [dispatch, setBooksToStore, setUserSavingsToStore, setUserToStore]);

  if (authStatus === EFetchStatuses.pending || booksStatus === EFetchStatuses.pending) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ContentLoader />
      </div>
    );
  }

  return (
    <App />
  );
};

AppComponent.displayName = 'AppComponent';

export default withReduxStore(AppComponent);
