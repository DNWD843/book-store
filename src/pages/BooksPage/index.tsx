import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useMemo } from 'react';
import { Outlet } from 'react-router-dom';

import { BooksCatalogue } from '../../components/BooksCatalogue';
import { Page } from '../../components/Page';
import { EFetchStatuses } from '../../enums';
import { booksStore } from '../../stores';

import styles from './BooksCataloguePage.module.css';

const BooksPage: React.FC = () => (<Outlet />);

BooksPage.displayName = 'BooksPage';
const BooksCataloguePage: React.FC = observer(() => {
  const booksCollection = toJS(booksStore.books);
  const filteredCollection = toJS(booksStore.filteredCollection);
  const isLoading = booksStore.status === EFetchStatuses.pending;

  const pageSubtitle = useMemo(() => {
    if (!filteredCollection) return '';

    if (filteredCollection.length) {
      return 'Результат поиска по Вашему запросу:';
    }

    return 'По вашему запросу ничего не найдено';
  }, [filteredCollection]);

  return (
    <Page subtitle={pageSubtitle} title="Каталог" withNavLinks={false}>
      {booksCollection?.length
        ? (<BooksCatalogue books={filteredCollection || booksCollection} />)
        : null}
      {!booksCollection?.length && isLoading
        ? null : (
          <div className={styles.messageContainer}>
            <span className={styles.message}>А мы как раз обновляем ассортимент!</span>
            <span className={styles.message}>Пожалуйста, загляните к нам позже.</span>
          </div>
        )}
    </Page>
  );
});

BooksCataloguePage.displayName = 'BooksCataloguePage';

export { BooksPage, BooksCataloguePage };
