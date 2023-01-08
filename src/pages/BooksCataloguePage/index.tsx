import React from 'react';

import { BooksCatalogue } from '../../components/BooksCatalogue';
import { Page } from '../../components/Page';
import { useAppSelector } from '../../redux/hooks';
import { selectBooksCollection, selectFilteredCollection } from '../../redux/store';

import styles from './BooksCataloguePage.module.css';

export const BooksCataloguePage: React.FC = () => {
  const booksCollection = useAppSelector(selectBooksCollection) || [];
  const filteredCollection = useAppSelector(selectFilteredCollection);

  return (
    <Page subtitle={filteredCollection && !filteredCollection.length ? 'По вашему запросу ничего не найдено' : ''} title="Каталог">
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
