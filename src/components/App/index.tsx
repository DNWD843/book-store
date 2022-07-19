import React from 'react';

import './App.css';
import { EFetchStatuses } from '../../enums';
import { withReduxStore } from '../../provider/withReduxStore';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { authActions, TUserData } from '../../redux/slices/authSlice';
import { booksActions, TBooksCollection } from '../../redux/slices/booksSlice';
import { selectAuthStatus, selectBooks, selectBooksFetchingStatus, selectUserProfile } from '../../redux/store';
import { auth, getBooks } from '../../redux/thunks';
import { keys, storage } from '../../utils';
import { ContentLoader } from '../ContentLoader';

import { App } from './App';

const AppComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUserProfile);
  const books = useAppSelector(selectBooks);
  const { setUserToStore } = authActions;
  const { setBooksToStore } = booksActions;

  const savedRegisteredUser: TUserData = storage.getData(keys.REGISTERED_USER);
  const savedAnonymousUser: TUserData = storage.getData(keys.ANONYMOUS_USER);
  const savedBooks: TBooksCollection = storage.getData(keys.BOOKS);
  const authStatus = useAppSelector(selectAuthStatus);
  const booksStatus = useAppSelector(selectBooksFetchingStatus);

  if (savedRegisteredUser && authStatus === EFetchStatuses.fulfilled) {
    dispatch(setUserToStore(savedRegisteredUser));
  } else if (!savedAnonymousUser && authStatus === EFetchStatuses.fulfilled) {
    dispatch(auth.loginUserAnonymously());
  } else if (!user && authStatus === EFetchStatuses.fulfilled) {
    dispatch(setUserToStore(savedAnonymousUser));
  }

  if (!savedBooks && booksStatus === EFetchStatuses.fulfilled) {
    dispatch(getBooks());
  } else if (!books && booksStatus === EFetchStatuses.fulfilled) {
    dispatch(setBooksToStore(savedBooks));
  }

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
