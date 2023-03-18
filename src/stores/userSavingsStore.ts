import { makeAutoObservable, toJS } from 'mobx';

import { savingsApi } from '../api';
import { defaultMessages, MINIMAL_BOOKS_QUANTITY } from '../constants';
import { ECollectionPaths, EFetchStatuses } from '../enums';
import { TBookInfo, TPurchases, TUser, TUserSavings } from '../types';

class UserSavingsStore {
  _favorites: TUserSavings['favorites'] = [];

  _cartValue: TUserSavings['cartValue'] = [];

  _purchases: TUserSavings['purchases'] = {};

  _status: EFetchStatuses = EFetchStatuses.fulfilled;

  _fetchSavingsStatus: EFetchStatuses = EFetchStatuses.fulfilled;

  _api: any = {};

  constructor(api: any) {
    this._api = api;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  get status() {
    return this._status;
  }

  get fetchSavingsStatus() {
    return this._fetchSavingsStatus;
  }

  get favorites() {
    return this._favorites;
  }

  addToFavorites(book: TBookInfo) {
    this._favorites.push(book);
  }

  removeFromFavorites(book: TBookInfo) {
    this._favorites = this._favorites.filter(({ id }) => id !== book.id);
  }

  get cartValue() {
    return this._cartValue;
  }

  addToCart(book: TBookInfo) {
    this._cartValue.push({ ...book, quantity: MINIMAL_BOOKS_QUANTITY });
  }

  removeFromCart(book: TBookInfo) {
    this._cartValue = this._cartValue.filter(({ id }) => id !== book.id);
  }

  clearCartValue() {
    this._cartValue = [];
  }

  get purchases() {
    return this._purchases;
  }

  addToPurchases(purchase: TPurchases) {
    this._purchases = { ...this._purchases, ...purchase };
  }

  get savings() {
    return {
      [ECollectionPaths.favorites]: this._favorites,
      [ECollectionPaths.cartValue]: this._cartValue,
      [ECollectionPaths.purchases]: this._purchases,
    };
  }

  clearSavings() {
    this._setInitialValues();
  }

  increaseBookQuantity(id: TBookInfo['id']) {
    this._cartValue = this._cartValue.map((book) => {
      if (book.id === id && book.quantity) {
        return ({ ...book, quantity: book.quantity + 1 });
      }

      return book;
    });
  }

  decreaseBookQuantity(id: TBookInfo['id']) {
    this._cartValue = this._cartValue.map((book) => {
      if (book.id === id && book.quantity) {
        return ({ ...book, quantity: book.quantity - 1 });
      }

      return book;
    });
  }

  _setSavings({ favorites, cartValue, purchases }: TUserSavings) {
    this._favorites = favorites;
    this._purchases = purchases;

    if (this._cartValue.length) {
      this._cartValue = this._cartValue.reduce<TBookInfo[]>((acc, book) => {
        if (acc.some((bookFromDB) => bookFromDB.id === book.id)) {
          return acc;
        }

        acc.push(book);
        return acc;
      }, [...cartValue]);
    } else {
      this._cartValue = cartValue;
    }
  }

  _setInitialValues() {
    this._favorites = [];
    this._cartValue = [];
    this._purchases = {};
  }

  *fetchSavings(id: TUser['userId']) {
    this._fetchSavingsStatus = EFetchStatuses.pending;

    try {
      const savingsFromDB: TUserSavings = yield this._api.fetchSavings(id);
      this._setSavings(savingsFromDB);
      this._fetchSavingsStatus = EFetchStatuses.fulfilled;
    } catch (err) {
      this._fetchSavingsStatus = EFetchStatuses.rejected;
      throw err;
    }
  }

  *updateSavingsInDB() {
    this._status = EFetchStatuses.pending;
    try {
      const savings = {
        [ECollectionPaths.favorites]: this._favorites,
        [ECollectionPaths.cartValue]: this._cartValue,
        [ECollectionPaths.purchases]: this._purchases,
      };

      yield this._api.updateSavings(toJS(savings));

      this._status = EFetchStatuses.fulfilled;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      this._status = EFetchStatuses.rejected;
    }
  }

  *deleteSavingsInDB() {
    this._status = EFetchStatuses.pending;

    try {
      const areSavingsDeleted: boolean = yield this._api.deleteSavings();

      if (!areSavingsDeleted) {
        throw new Error(defaultMessages.unexpectedError);
      }

      this._setInitialValues();
      this._status = EFetchStatuses.fulfilled;
    } catch (err) {
      this._status = EFetchStatuses.rejected;
      throw err;
    }
  }
}

export const savingsStore = new UserSavingsStore(savingsApi);
