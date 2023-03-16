import { makeAutoObservable } from 'mobx';

import { booksApi } from '../api';
import { EFetchStatuses } from '../enums';
import { TBookInfo } from '../types';

class BookDetailsStore {
  _api: any;

  _status: EFetchStatuses = EFetchStatuses.fulfilled;

  _selectedBook: TBookInfo | null = null;

  constructor(api: any) {
    this._api = api;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  get status() {
    return this._status;
  }

  get selectedBook() {
    return this._selectedBook;
  }

  setSelected(book: TBookInfo | null) {
    this._selectedBook = book;
  }

  clearDetails() {
    this._selectedBook = null;
  }

  *getBookById(id: TBookInfo['id']) {
    this._status = EFetchStatuses.pending;

    try {
      const book: TBookInfo | null = yield this._api.fetchBookByBookId(id);
      this.setSelected(book);
      this._status = EFetchStatuses.fulfilled;

      return book;
    } catch (err) {
      this._status = EFetchStatuses.rejected;
      throw err;
    }
  }
}

export const bookDetailsStore = new BookDetailsStore(booksApi);
