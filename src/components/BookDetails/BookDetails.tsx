import classNames from 'classnames';
import React from 'react';

import { RUBLE_SIGN } from '../../constants';
import { bookmarkActiveIcon, bookmarkIcon } from '../../vendor/icons';

import { TBookDetailsProps } from './BookDetails.props';

import styles from './BookDetails.module.css';

const BookDetails: React.FC<TBookDetailsProps> = (
  { title, author, price, genre, cover, description,
    isAnonymous, isAddedToCart, isAddedToFavorites, onBookmarkButtonClick, onCartButtonClick },
) => (
  <article className={styles.card}>
    <img alt="book cover" className={styles.coverImage} src={cover} />
    <p className={styles.genre}>{genre}</p>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.author}>{author}</p>
    {!isAnonymous && (
      <button
        className={classNames(styles.addToFavoritesButton, 'btn', 'btn-secondary')}
        type="button"
        onClick={onBookmarkButtonClick}
      >
        {isAddedToFavorites ? 'Удалить из избранного' : 'Добавить в избранное'}
        <i className={styles.bookmarkIcon}>{isAddedToFavorites ? bookmarkActiveIcon : bookmarkIcon}</i>
      </button>
    )}
    <button
      className={classNames(styles.buyButton, 'btn', 'btn-primary')}
      title={isAddedToCart ? 'Книга добавлена в корзину' : 'Книга будет добавлена в корзину'}
      type="button"
      onClick={onCartButtonClick}
    >
      {isAddedToCart ? 'Убрать из корзины' : `Купить за ${price} ${RUBLE_SIGN}`}
    </button>
    <h3 className={styles.descriptionTitle}>Сюжет</h3>
    <textarea readOnly className={styles.descriptionText} rows={10} value={description} wrap="soft" />
  </article>
);

BookDetails.displayName = 'BookDetails';

export { BookDetails };
