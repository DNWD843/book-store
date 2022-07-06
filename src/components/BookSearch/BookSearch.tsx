import React from 'react';

import { TBookSearchProps } from './BookSearch.props';

const BookSearch: React.FC<TBookSearchProps> = ({ value, onChange, onSearch, onClear }) => (
  <div className="input-group">
    <input
      aria-label="Recipient's username with two button addons"
      className="form-control"
      maxLength={50}
      placeholder="Поиск по названию книги или автору"
      type="text"
      value={value}
      onChange={onChange}
    />
    <button className="btn btn-outline-success" type="button" onClick={onSearch}>Найти</button>
    <button className="btn btn-outline-danger" type="button" onClick={onClear}>Очистить</button>
  </div>
);

BookSearch.displayName = 'BookSearch';

export { BookSearch };
