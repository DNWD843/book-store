import classNames from 'classnames';
import React from 'react';

import { TCardTooltipProps } from './CardTooltip.props';

import styles from './CardTooltip.module.css';

export const CardTooltip: React.FC<TCardTooltipProps> = ({ title, author, price }) => (
  <div className={styles.tooltip}>
    <span className={styles.title}>{title}</span>
    <span className={styles.author}>{`${author.name} ${author.surname}`}</span>
    <span className={styles.price}>{`${price} ₽`}</span>
    <button className={classNames(styles.cartButton, 'btn', 'btn-secondary', 'btn-sm')} type="button">K</button>
  </div>
);
