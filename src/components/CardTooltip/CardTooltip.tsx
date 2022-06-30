import classNames from 'classnames';
import React from 'react';

import { ICardTooltipProps } from './CardTooltip.props';

import styles from './CardTooltip.module.css';

export const CardTooltip: React.FC<ICardTooltipProps> = (
  { title, author, price, className, onMouseEnter, onMouseLeave, onBookClick, onBookmarkClick, onCartButtonClick },
) => (
  <div
    className={classNames(styles.tooltip, className)}
    onClick={onBookClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className={styles.content}>
      <span className={styles.title}>{title}</span>
      <span className={styles.author}>{`${author.name} ${author.surname}`}</span>
      <span className={styles.price}>{`${price} ₽`}</span>
      <svg
        className={classNames(styles.bookmark)}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onBookmarkClick}
      >
        <path
          d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
        />
      </svg>
      <button
        className={classNames(styles.cartButton, 'btn', 'btn-outline-light', 'btn-sm')}
        type="button"
        onClick={onCartButtonClick}
      >
        K
      </button>
    </div>
  </div>
);
