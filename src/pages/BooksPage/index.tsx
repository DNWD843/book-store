import React, { useMemo } from 'react';
import { Outlet } from 'react-router-dom';

import { BooksCatalogue } from '../../components/BooksCatalogue';
import { Page } from '../../components/Page';
import { useAppSelector } from '../../redux/hooks';
import { selectBooksCollection, selectFilteredCollection } from '../../redux/store';

import styles from './BooksCataloguePage.module.css';

const BooksPage: React.FC = () => (<Outlet />);

BooksPage.displayName = 'BooksPage';
const BooksCataloguePage: React.FC = () => {
  const booksCollection = useAppSelector(selectBooksCollection) || [];
  const filteredCollection = useAppSelector(selectFilteredCollection);
  const pageSubtitle = useMemo(() => {
    if (!filteredCollection) return '';

    if (filteredCollection.length) {
      return 'Результат поиска по Вашему запросу:';
    }

    return 'По вашему запросу ничего не найдено';
  }, [filteredCollection]);

  return (
    <Page subtitle={pageSubtitle} title="Каталог" withNavLinks={false}>
      {booksCollection.length
        ? (<BooksCatalogue books={filteredCollection || booksCollection} />)
        : (
          <div className={styles.messageContainer}>
            <span className={styles.message}>Упс! А мы как раз обновляем ассортимент!</span>
            <span className={styles.message}>Пожалуйста, загляните к нам позже.</span>
          </div>
        )}
    </Page>
  );
};

BooksCataloguePage.displayName = 'BooksCataloguePage';

export { BooksPage, BooksCataloguePage };
