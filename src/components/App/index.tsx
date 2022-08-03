import React from 'react';

import './App.css';
import { EFetchStatuses } from '../../enums';
import { useInitialData } from '../../hooks/useInitialData';
import { withReduxStore } from '../../provider/withReduxStore';
import { useAppSelector } from '../../redux/hooks';
import { selectAuthStatus, selectBooksFetchingStatus } from '../../redux/store';
import { ContentLoader } from '../ContentLoader';

import { App } from './App';

const AppComponent: React.FC = () => {
  const authStatus = useAppSelector(selectAuthStatus);
  const booksStatus = useAppSelector(selectBooksFetchingStatus);

  useInitialData({ authStatus, booksStatus });

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
