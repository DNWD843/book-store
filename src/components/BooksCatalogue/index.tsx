import React from 'react';

import { useAppSelector } from '../../redux/hooks';
import { selectBooksCollection } from '../../redux/store';
import { Cards } from '../Cards';

import styles from './BooksCatalogue.module.css';

export function BooksCatalogue() {
  const booksCollection = useAppSelector(selectBooksCollection) || [];

  if (!booksCollection.length) {
    return (
      <div className={styles.messageContainer}>
        <span className={styles.message}>Упс! А мы как раз обновляем ассортимент!</span>
        <span className={styles.message}>Пожалуйста, загляните к нам позже.</span>
      </div>
    );
  }

  return (
    <Cards books={booksCollection} />
  );
}

BooksCatalogue.displayName = 'BooksCatalogue';
