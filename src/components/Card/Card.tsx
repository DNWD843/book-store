import React from 'react';

import { TBook } from '../../types';

import styles from './Card.module.css';

export const Card: React.FC<Omit<TBook, 'id' | 'description'>> = ({ title, author: { surname, name }, price, genre }) => (
  <article className={styles.card}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.author}>{`Автор: ${name} ${surname}`}</p>
    <p className={styles.genre}>{`Жанр: ${genre}`}</p>
    <p className={styles.price}>{`Купить за ${price} ₽`}</p>
  </article>
);
