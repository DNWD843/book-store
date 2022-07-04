import classNames from 'classnames';
import React from 'react';

import { RUBLE_SIGN } from '../../constants';

import { TShoppingCartTableRowProps } from './ShoppingCartTableRow.props';

import styles from './ShoppingCartTableRow.module.css';

const ShoppingCartTableRow: React.FC<TShoppingCartTableRowProps> = ({ bookInfo, onDeleteBook, index }) => {
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
        <button className={classNames('btn', 'btn-light', styles.decrementButton)} type="button">–</button>
        <button className={classNames('btn', 'btn-light', styles.incrementButton)} type="button">+</button>
      </div>
      <span className={styles.totalPriceTitle}>Итого</span>
      <span className={styles.totalPrice}>{`222 ${RUBLE_SIGN}`}</span>
      <button className={styles.deleteButton} type="button" onClick={onDeleteBook}>
        <svg
          className={styles.deleteIcon}
          // fill="currentColor"
          height="16"
          viewBox="0 0 16 16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
          />
          <path
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            fillRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

ShoppingCartTableRow.displayName = 'Row';

export { ShoppingCartTableRow };
