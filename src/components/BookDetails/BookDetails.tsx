import classNames from 'classnames';
import React from 'react';

import { RUBLE_SIGN } from '../../constants';
import { bookmarkActiveIcon, bookmarkIcon } from '../../vendor/icons';
import { SimpleButton } from '../Buttons';

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
      <SimpleButton
        className={classNames(styles.button, styles.addToFavoritesButton, 'btn-secondary')}
        onClick={onBookmarkButtonClick}
      >
        {isAddedToFavorites ? 'Удалить из избранного' : 'Добавить в избранное'}
        <i className={styles.bookmarkIcon}>{isAddedToFavorites ? bookmarkActiveIcon : bookmarkIcon}</i>
      </SimpleButton>
    )}

    <SimpleButton
      className={classNames(styles.button, styles.buyButton, 'btn-primary')}
      title={isAddedToCart ? 'Книга добавлена в корзину' : 'Книга будет добавлена в корзину'}
      onClick={onCartButtonClick}
    >
      {isAddedToCart ? 'Убрать из корзины' : `Купить за ${price} ${RUBLE_SIGN}`}
    </SimpleButton>
    <h3 className={styles.descriptionTitle}>Сюжет</h3>
    <textarea readOnly className={styles.descriptionText} rows={10} value={description} wrap="soft" />
  </article>
);

BookDetails.displayName = 'BookDetails';

export { BookDetails };
