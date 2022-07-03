import React from 'react';

import { RUBLE_SIGN } from '../../constants';

import { TShoppingCartProps } from './ShoppingCart.props';

import styles from './ShoppingCartItem.module.css';

export const ShoppingCartItem: React.FC<TShoppingCartProps> = ({ bookInfo, onDeleteBook, index }) => {
  const { cover, title, author, price } = bookInfo;

  return (
    <div className={styles.container}>
      <span className={styles.rowNumber}>{String(index + 1)}</span>
      <img alt="book cover" className={styles.cover} src={cover} />
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.author}>{`${author.name} ${author.surname}`}</span>
      <span className={styles.priceTitle}>Цена</span>
      <span className={styles.price}>{`${price} ${RUBLE_SIGN}`}</span>
      <span className={styles.quantityTitle}>Количество</span>
      <span className={styles.quantity}>1</span>
      <div className={styles.quantityButtons}>
        <button type="button">-</button>
        <button type="button">+</button>
      </div>
      <span className={styles.totalPriceTitle}>Итого</span>
      <span className={styles.totalPrice}>{`222 ${RUBLE_SIGN}`}</span>
      <button className={styles.deleteButton} type="button" onClick={onDeleteBook}>X</button>
    </div>
  );
};
