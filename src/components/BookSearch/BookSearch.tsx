import React from 'react';

import { SimpleButton, SubmitButton } from '../../ui-components/Buttons';

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
    <SubmitButton className="btn-outline-success ">Искать</SubmitButton>
    <SimpleButton className="btn-outline-danger" onClick={onClear}>Очистить</SimpleButton>
  </form>
);

BookSearch.displayName = 'BookSearch';

export { BookSearch };
