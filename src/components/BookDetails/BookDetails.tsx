import classNames from 'classnames';
import React from 'react';

import { TBookInfo } from '../../types';

import styles from './BookDetails.module.css';

export const BookDetails: React.FC<Omit<TBookInfo, 'id' | 'description'>> = ({ title, author: { surname, name }, price, genre, cover }) => (
  <article className={styles.card}>
    <img alt="book cover" className={styles.coverImage} src={cover} />
    <p className={styles.genre}>{`Жанр: ${genre}`}</p>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.author}>{`Автор: ${name} ${surname}`}</p>
    <p className={styles.reviews}>Отзывы о книге</p>
    <p className={styles.rating}>Рейтинг тут</p>
    <button className={classNames(styles.cart, 'btn', 'btn-secondary')} type="button">Добавить в корзину</button>
    <button className={classNames(styles.price, 'btn', 'btn-secondary')} type="button">{`Купить за ${price} ₽`}</button>
  </article>
);
