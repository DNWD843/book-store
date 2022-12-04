import classNames from 'classnames';
import React from 'react';

import { RUBLE_SIGN } from '../../constants';

import { TBookDetailsProps } from './BookDetails.props';

import styles from './BookDetails.module.css';

const BookDetails: React.FC<TBookDetailsProps> = (
  { title, author: { surname, name }, price, genre, cover, description, isAnonymous },
) => (
  <article className={styles.card}>
    <img alt="book cover" className={styles.coverImage} src={cover} />
    <p className={styles.genre}>{genre}</p>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.author}>{`${name} ${surname}`}</p>
    {!isAnonymous && (
      <button className={classNames(styles.addToFavoritesButton, 'btn', 'btn-secondary')} type="button">
        Добавить в избранное
        <svg
          className={styles.bookmarkIcon}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
          />
        </svg>
      </button>
    )}
    <button className={classNames(styles.buyButton, 'btn', 'btn-primary')} type="button">{`Купить за ${price} ${RUBLE_SIGN}`}</button>
    <h3 className={styles.descriptionTitle}>Описание книги</h3>
    <textarea readOnly className={styles.descriptionText} rows={10} value={description} wrap="soft" />
  </article>
);

BookDetails.displayName = 'BookDetails';

export { BookDetails };
