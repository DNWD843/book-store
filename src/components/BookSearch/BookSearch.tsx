import classNames from 'classnames';
import React from 'react';

import { SimpleButton } from '../../ui-components/Buttons';

import { TBookSearchProps } from './BookSearch.props';

import styles from './BookSearch.module.css';

const BookSearch: React.FC<TBookSearchProps> = ({ value, onChange, onClear }) => (
  <form className={styles.searchForm} role="search">
    <input
      aria-label="Search"
      className={classNames('form-control w-100', styles.searchInput)}
      maxLength={50}
      placeholder="Поиск по названию книги или автору"
      type="text"
      value={value}
      onChange={onChange}
    />
    <SimpleButton className={classNames('btn-outline-danger w-25', styles.clearButton)} onClick={onClear}>Очистить</SimpleButton>
  </form>
);

BookSearch.displayName = 'BookSearch';

export { BookSearch };
