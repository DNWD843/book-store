import classNames from 'classnames';
import React from 'react';

import { RUBLE_SIGN } from '../../constants';

import { ICardToolBarProps } from './CardToolBar.props';

import styles from './CardToolBar.module.css';

export const CardToolBar: React.FC<ICardToolBarProps> = (
  { title, author, price, className, onMouseEnter, onMouseLeave, onBookCardClick, onBookmarkButtonClick, onCartButtonClick },
) => (
  <div
    className={classNames(styles.tooltip, className)}
    onClick={onBookCardClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className={styles.content}>
      <span className={styles.title}>{title}</span>
      <span className={styles.author}>{`${author.name} ${author.surname}`}</span>
      <span className={styles.price}>{`${price} ${RUBLE_SIGN}`}</span>
      <svg
        className={styles.bookmarkIcon}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onBookmarkButtonClick}
      >
        <path
          d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
        />
      </svg>
      <svg
        className={styles.cartIcon}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onCartButtonClick}
      >
        <path
          d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
        />
      </svg>
    </div>
  </div>
);
