import React from 'react';

import { TBookSearchProps } from './BookSearch.props';

import styles from './BookSearch.module.css';

const BookSearch: React.FC<TBookSearchProps> = ({ value, onChange, onSubmit, onClear }) => (
  <form className={styles.searchForm} role="search" onSubmit={onSubmit}>
    <input
      aria-label="Search"
      className="form-control"
      maxLength={50}
      placeholder="Поиск по названию книги или автору"
      type="text"
      value={value}
      onChange={onChange}
    />
    <button className="btn btn-outline-success " type="submit">Искать</button>
    <button className="btn btn-outline-danger" type="button" onClick={onClear}>Очистить</button>
  </form>
);

BookSearch.displayName = 'BookSearch';

export { BookSearch };
