import React from 'react';

import { SimpleButton } from '../../ui-components/Buttons';

import { TBookSearchProps } from './BookSearch.props';

import styles from './BookSearch.module.css';

const BookSearch: React.FC<TBookSearchProps> = ({ value, onChange, onClear }) => (
  <form className={styles.searchForm} role="search">
    <input
      aria-label="Search"
      className="form-control w-100"
      maxLength={50}
      placeholder="Поиск по названию книги или автору"
      type="text"
      value={value}
      onChange={onChange}
    />
    <SimpleButton className="btn-outline-danger w-25" onClick={onClear}>Очистить</SimpleButton>
  </form>
);

BookSearch.displayName = 'BookSearch';

export { BookSearch };
