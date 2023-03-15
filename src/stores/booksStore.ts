import { makeAutoObservable } from 'mobx';

import * as booksApi from '../api/booksApi';
import { EFetchStatuses } from '../enums';
import { IBooksCollection } from '../types';

class BooksStore {
  _books: IBooksCollection['books'] = null;

  _filteredCollection: IBooksCollection['books'] = null;

  _searchValue: string = '';

  _updatedAt: IBooksCollection['updatedAt'] = 0;

  _api: any = {};

  status: EFetchStatuses = EFetchStatuses.fulfilled;

  constructor(api: any) {
    this._api = api;
    makeAutoObservable(this);
  }

  clearBooksState = () => {
    this._books = null;
    this._updatedAt = undefined;
  };

  setBooksToStore = ({ books, updatedAt }: IBooksCollection) => {
    this._books = books;
    this._updatedAt = updatedAt;
  };

  get books() {
    return this._books;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  filterCollectionByValue = (searchValue: string) => {
    if (this._books?.length && searchValue) {
      this._filteredCollection = this._books.filter(
        (book) => book.author.toLowerCase().includes(searchValue.toLowerCase()) || book.title.toLowerCase().includes(searchValue.toLowerCase()),
      );
    } else {
      this._filteredCollection = null;
    }
  };

  get filteredCollection() {
    return this._filteredCollection;
  }

  set searchValue(value: string) {
    this._searchValue = value;
  }

  get searchValue() {
    return this._searchValue;
  }

  clearSearchValue = () => {
    this._filteredCollection = null;
    this._searchValue = '';
  };

  *getBooks() {
    this.status = EFetchStatuses.pending;
    try {
      const booksCollection: IBooksCollection = yield this._api.fetchBooks();
      this.setBooksToStore(booksCollection);
      this.status = EFetchStatuses.fulfilled;

      return booksCollection;
    } catch (err) {
      this.status = EFetchStatuses.rejected;
      throw err;
    }
  }
}

export const booksStore = new BooksStore(booksApi);
