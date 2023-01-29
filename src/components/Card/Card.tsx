import React from 'react';

import { TCardProps } from './Card.props';

import styles from './Card.module.css';

const Card: React.FC<TCardProps> = ({ genre, cover, onCardClick }) => (
  <article className={styles.card} onClick={onCardClick}>
    <span className={styles.genre}>{genre}</span>
    <img alt="book cover" className={styles.coverImage} src={cover} />
  </article>
);

Card.displayName = 'Card';

export { Card };
