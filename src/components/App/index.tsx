import React from 'react';

import './App.css';
import { EFetchStatuses } from '../../enums';
import { withReduxStore } from '../../provider/withReduxStore';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectAuthStatus, selectBooks, selectBooksFetchingStatus, selectUserProfile } from '../../redux/store';
import { getBooks } from '../../redux/thunks';
import { loginUserAnonymously } from '../../redux/thunks/authThunks';

import { App } from './App';

const AppComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectAuthStatus);
  const user = useAppSelector(selectUserProfile);
  const books = useAppSelector(selectBooks);
  const booksStatus = useAppSelector(selectBooksFetchingStatus);

  if (!user.isAnonymous && status === EFetchStatuses.fulfilled) {
    dispatch(loginUserAnonymously());
  }

  if (!books && booksStatus === EFetchStatuses.fulfilled) {
    dispatch(getBooks());
  }

  return (
    <App />
  );
};

AppComponent.displayName = 'AppComponent';

export default withReduxStore(AppComponent);
