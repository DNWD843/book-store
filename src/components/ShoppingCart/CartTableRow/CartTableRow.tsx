import classNames from 'classnames';
import React from 'react';

import { MINIMAL_BOOKS_QUANTITY, RUBLE_SIGN } from '../../../constants';
import { shoppingCartDeleteIcon } from '../../../vendor/icons';

import { TCartTableRowProps } from './CartTableRow.props';

import styles from './CartTableRow.module.css';

const CartTableRow: React.FC<TCartTableRowProps> = ({ bookInfo, onDeleteBook, index, totalPricePerBook,
  increaseQuantity, decreaseQuantity }) => {
  const { cover, title, author, price, quantity } = bookInfo;

  return (
    <div className={styles.container}>
      <span className={styles.rowNumber}>{String(index + 1)}</span>
      <img alt="book cover" className={styles.cover} src={cover} />
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.author}>{author}</span>
      <span className={styles.priceTitle}>Цена</span>
      <span className={styles.price}>{`${price} ${RUBLE_SIGN}`}</span>
      <span className={styles.quantityTitle}>Количество</span>
      <span className={styles.quantity}>{quantity}</span>
      <div className={styles.quantityButtons}>
        <button
          className={classNames('btn', 'btn-light', styles.decrementButton)}
          disabled={quantity === MINIMAL_BOOKS_QUANTITY}
          type="button"
          onClick={decreaseQuantity}
        >
          –
        </button>
        <button
          className={classNames('btn', 'btn-light', styles.incrementButton)}
          type="button"
          onClick={increaseQuantity}
        >
          +
        </button>
      </div>
      <span className={styles.totalPriceTitle}>Всего</span>
      <span className={styles.totalPrice}>{`${totalPricePerBook} ${RUBLE_SIGN}`}</span>
      <button className={styles.deleteButton} type="button" onClick={onDeleteBook}>
        <i className={styles.deleteIcon}>{shoppingCartDeleteIcon}</i>
      </button>
    </div>
  );
};

CartTableRow.displayName = 'Row';

export { CartTableRow };
