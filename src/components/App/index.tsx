import React from 'react';

import './App.css';
import { EFetchStatuses } from '../../enums';
import { withReduxStore } from '../../provider/withReduxStore';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { authActions } from '../../redux/slices/authSlice';
import { selectAuthStatus, selectBooks, selectBooksFetchingStatus, selectUserProfile } from '../../redux/store';
import { getBooks, auth } from '../../redux/thunks';
import { TUser } from '../../types';
import { getUserFromLS, keys } from '../../utils';

import { App } from './App';

const AppComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectAuthStatus);
  const user = useAppSelector(selectUserProfile);
  const books = useAppSelector(selectBooks);
  const booksStatus = useAppSelector(selectBooksFetchingStatus);
  const { setUserToStore } = authActions;

  const savedUser: TUser | null = getUserFromLS(keys.USER_KEY);

  if (!savedUser) {
    dispatch(auth.loginUserAnonymously());
  } else if (!user.userId) {
    dispatch(setUserToStore(savedUser));
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
