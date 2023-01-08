import React from 'react';

import { useAppSelector } from '../../redux/hooks';
import { selectBooksCollection, selectFilteredCollection } from '../../redux/store';
import { Cards } from '../Cards';
import { Page } from '../Page';

import styles from './BooksCatalogue.module.css';

export function BooksCatalogue() {
  const booksCollection = useAppSelector(selectBooksCollection) || [];
  const filteredCollection = useAppSelector(selectFilteredCollection);

  return (
    <Page subtitle={filteredCollection && !filteredCollection.length ? 'По вашему запросу ничего не найдено' : ''} title="Каталог">
      {booksCollection.length
        ? (<Cards books={filteredCollection || booksCollection} />)
        : (
          <div className={styles.messageContainer}>
            <span className={styles.message}>Упс! А мы как раз обновляем ассортимент!</span>
            <span className={styles.message}>Пожалуйста, загляните к нам позже.</span>
          </div>
        )}
    </Page>
  );
}

BooksCatalogue.displayName = 'BooksCatalogue';
