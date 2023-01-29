import React from 'react';

import { RUBLE_SIGN } from '../../../constants';

import { ICardToolBarProps } from './CardToolBar.props';

import styles from './CardToolBar.module.css';

const CardToolBar: React.FC<ICardToolBarProps> = (
  { title, author, price },
) => (
  <div className={styles.content}>
    <span className={styles.title}>{title}</span>
    <span className={styles.author}>{author}</span>
    <span className={styles.price}>{`${price} ${RUBLE_SIGN}`}</span>
  </div>
);

CardToolBar.displayName = 'CardToolBar';

export { CardToolBar };
