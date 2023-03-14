import { flowResult } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useLayoutEffect } from 'react';

import { ONE_DAY_TIMESTAMP } from '../../constants';
import { EPromiseStates } from '../../enums';
import { useMatchMedia } from '../../hooks';
import { withReduxStore } from '../../provider/withReduxStore';
import { booksStore, uiStore } from '../../stores';
import { IBooksCollection, TUserData } from '../../types';
import { checkNeedToDataUpdate, storage, storageKeys } from '../../utils';
import { ScreenLoader } from '../Loaders';
import './App.css';

import { App } from './App';

const AppComponent: React.FC = observer(() => {
  const { isSmallScreen, isMobile, isTablet, isDesktop } = useMatchMedia();

  useLayoutEffect(() => {
    const savedUser = storage.getData<TUserData>(storageKeys.USER);
    const savedBooks = storage.getData<IBooksCollection>(storageKeys.BOOKS);

    uiStore.screen = { isSmallScreen, isMobile, isTablet, isDesktop };

    // if (savedUser) {
    //   dispatch(getUserSavings(savedUser.userId))
    //     .then(() => { dispatch(setUserToStore(savedUser)); });
    // }

    if (!savedBooks
      || (savedBooks.books && savedBooks.updatedAt && checkNeedToDataUpdate({ date: savedBooks.updatedAt, limit: ONE_DAY_TIMESTAMP }))) {
      flowResult(booksStore.getBooks()).then((res) => {
        storage.setData(storageKeys.BOOKS, res as Object);
      })
        // eslint-disable-next-line no-console
        .catch((err) => { console.error(err); });
    } else {
      booksStore.setBooksToStore(savedBooks);
    }
  }, [isDesktop, isMobile, isSmallScreen, isTablet]);

  const isLoading = booksStore.state === EPromiseStates.pending;

  return (
    <>
      <App isDesktop={isDesktop} />
      {isLoading
        ? (<ScreenLoader isTransparent={false} />)
        : null}
    </>
  );
});

AppComponent.displayName = 'AppComponent';

export default withReduxStore(AppComponent);
