import { makeAutoObservable } from 'mobx';

import { booksApi } from '../api';
import { EFetchStatuses } from '../enums';
import { IBooksCollection } from '../types';

class BooksStore {
  _books: IBooksCollection['books'] = null;

  _filteredCollection: IBooksCollection['books'] = null;

  _searchValue: string = '';

  _updatedAt: IBooksCollection['updatedAt'] = 0;

  _api: any = {};

  _status: EFetchStatuses = EFetchStatuses.fulfilled;

  _fetchBooksStatus: EFetchStatuses = EFetchStatuses.fulfilled;

  constructor(api: any) {
    this._api = api;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  get status() {
    return this._status;
  }

  get fetchBooksStatus() {
    return this._fetchBooksStatus;
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

  filterCollectionByValue = (query: string) => {
    if (this._books?.length && query) {
      this._filteredCollection = this._books.filter(
        (book) => book.author.toLowerCase().includes(query.toLowerCase()) || book.title.toLowerCase().includes(query.toLowerCase()),
      );
    } else {
      this._filteredCollection = null;
    }
  };

  get filteredCollection() {
    return this._filteredCollection;
  }

  setSearchValue = (value: string) => {
    this._searchValue = value;
  };

  get searchValue() {
    return this._searchValue;
  }

  clearSearchValue = () => {
    this._filteredCollection = null;
    this._searchValue = '';
  };

  *getBooks() {
    this._fetchBooksStatus = EFetchStatuses.pending;
    try {
      const booksCollection: IBooksCollection = yield this._api.fetchBooks();
      this.setBooksToStore(booksCollection);
      this._fetchBooksStatus = EFetchStatuses.fulfilled;

      return booksCollection;
    } catch (err) {
      this._fetchBooksStatus = EFetchStatuses.rejected;
      throw err;
    }
  }

  *updateBooksInDB() {
    this._status = EFetchStatuses.pending;
    try {
      const updatedCollection: IBooksCollection = yield this._api.updateBooksCollection();
      this.setBooksToStore({ books: updatedCollection.books, updatedAt: updatedCollection.updatedAt });
      this._status = EFetchStatuses.fulfilled;

      return updatedCollection;
    } catch (err) {
      this._status = EFetchStatuses.rejected;
      throw err;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  *buyBooks(data: any) {
    this._status = EFetchStatuses.pending;
    try {
      const res: { message: string } = yield this._api.buyBooks();
      this._status = EFetchStatuses.fulfilled;

      return res;
    } catch (err) {
      this._status = EFetchStatuses.rejected;
      throw err;
    }
  }
}

export const booksStore = new BooksStore(booksApi);
