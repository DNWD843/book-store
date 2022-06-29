import classNames from 'classnames';
import React from 'react';

import { TCardProps } from '../../types';

import styles from './Card.module.css';

export const Card: React.FC<TCardProps> = ({ genre, cover, showTooltip, hideTooltip }) => (
  <article
    className={styles.card}
    onMouseEnter={showTooltip}
    onMouseLeave={hideTooltip}
  >
    <span className={styles.genre}>{genre}</span>
    <div className={styles.coverContainer}>
      {/* TODO: сделать закладку чекбоксом ?? */}
      <svg
        className={classNames(styles.bookmark)}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
        />
      </svg>
      <img alt="book cover" className={styles.coverImage} src={cover} />
    </div>
  </article>
);

// <p className={styles.author}>{`Автор: ${name} ${surname}`}</p>
// <p className={styles.reviews}>Отзывы о книге</p>
// <p className={styles.genre}>{`Жанр: ${genre}`}</p>
// <p className={styles.rating}>Рейтинг тут</p>
