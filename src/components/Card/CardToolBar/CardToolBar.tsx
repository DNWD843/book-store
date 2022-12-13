import classNames from 'classnames';
import React from 'react';

import { RUBLE_SIGN } from '../../../constants';
import { bookmarkIcon, bookmarkActiveIcon, shoppingCartEmptyIcon, shoppingCartFilledIcon } from '../../../vendor/icons';

import { ICardToolBarProps } from './CardToolBar.props';

import styles from './CardToolBar.module.css';

const CardToolBar: React.FC<ICardToolBarProps> = (
  { title, author, price, className, isAnonymous,
    onMouseEnter, onMouseLeave, onBookCardClick, onBookmarkButtonClick, onCartButtonClick,
    isAddedToFavorites, isAddedToCart },
) => (
  <div
    className={classNames(styles.toolbar, className)}
    onClick={onBookCardClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className={styles.content}>
      <span className={styles.title}>{title}</span>
      <span className={styles.author}>{author}</span>
      <span className={styles.price}>{`${price} ${RUBLE_SIGN}`}</span>
      {!isAnonymous && (
        <div className={styles.bookmarkIcon} title={isAddedToFavorites ? 'Удалить из избранного' : 'Добавить в избранное'} onClick={onBookmarkButtonClick}>
          {
            isAddedToFavorites
              ? bookmarkActiveIcon
              : bookmarkIcon
          }
        </div>
      )}
      <div className={styles.cartIcon} title={isAddedToCart ? 'Удалить из корзины' : 'Положить в корзину'} onClick={onCartButtonClick}>
        {isAddedToCart
          ? shoppingCartFilledIcon
          : shoppingCartEmptyIcon}
      </div>

    </div>
  </div>
);

CardToolBar.displayName = 'CardToolBar';

export { CardToolBar };
