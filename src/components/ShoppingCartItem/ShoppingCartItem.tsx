import React from 'react';

import { TShoppingCartProps } from './ShoppingCart.props';

import styles from './ShoppingCartItem.module.css';

export const ShoppingCartItem: React.FC<TShoppingCartProps> = ({ bookInfo, onDeleteBook }) => {
  const { cover, title, author, price } = bookInfo;

  return (
    <div className={styles.container}>
      <img alt="book cover" className={styles.cover} src={cover} />
      <span className={styles.title}>{title}</span>
      <span className={styles.author}>{`${author.name} ${author.surname}`}</span>
      <span className={styles.price}>{price}</span>
      <span className={styles.quantity}>1</span>
      <span className={styles.totalPrice}>222</span>
      <button type="button" onClick={onDeleteBook}>X Удалить</button>
    </div>
  );
};
