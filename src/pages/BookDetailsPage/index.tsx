import { flowResult, toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { BookDetails } from '../../components/BookDetails';
import { ScreenLoader } from '../../components/Loaders';
import { Page } from '../../components/Page';
import { EFetchStatuses } from '../../enums';
import { bookDetailsStore } from '../../stores';
import { TBookInfo, TUrlParams } from '../../types';
import { storage, storageKeys } from '../../utils';
import { ContentErrorPage } from '../ContentErrorPage';
import { NotFoundPage } from '../NotFoundPage';

const BookDetailsPage: React.FC = () => {
  const { bookId = '' } = useParams<TUrlParams>();
  const { status: fetchingStatus, setSelected, clearDetails, getBookById } = bookDetailsStore;
  const selectedBook = toJS(bookDetailsStore.selectedBook);

  const cachedBookRef = useRef<TBookInfo | null>(storage.getData<TBookInfo>(storageKeys.BOOK_DETAILS));
  const wasRequestedRef = useRef<boolean>(false);

  useEffect(() => () => {
    clearDetails();
    storage.deleteData(storageKeys.BOOK_DETAILS);
  }, [clearDetails]);

  if (!selectedBook && cachedBookRef.current) {
    setSelected(cachedBookRef.current);
  }

  if (!selectedBook && !cachedBookRef.current && !wasRequestedRef.current && fetchingStatus === EFetchStatuses.fulfilled) {
    wasRequestedRef.current = true;
    flowResult(getBookById(bookId))
      .then((res) => {
        if (res) {
          storage.setData(storageKeys.BOOK_DETAILS, res);
        }
      });
  }

  return (
    <Page key="page" title="Описание книги">
      {fetchingStatus === EFetchStatuses.rejected ? (<ContentErrorPage />) : null}
      {selectedBook ? (<BookDetails book={selectedBook} />) : null}
      {!selectedBook && fetchingStatus === EFetchStatuses.fulfilled ? (<NotFoundPage />) : null}
      { fetchingStatus === EFetchStatuses.pending ? (<ScreenLoader />) : null }
    </Page>
  );
};

BookDetailsPage.displayName = 'BookDetailsPage';

const ObservableBookDetailsPage = observer(BookDetailsPage);

export { ObservableBookDetailsPage as BookDetailsPage };
