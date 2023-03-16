import { makeAutoObservable, toJS } from 'mobx';

import { savingsApi } from '../api';
import { defaultMessages, MINIMAL_BOOKS_QUANTITY } from '../constants';
import { ECollectionPaths, EFetchStatuses } from '../enums';
import { TBookInfo, TUser, TUserSavings } from '../types';

const defaultSavings: TUserSavings = {
  [ECollectionPaths.favorites]: [],
  [ECollectionPaths.cartValue]: [],
  [ECollectionPaths.purchases]: {},
};

class UserSavingsStore {
  _favorites: TUserSavings['favorites'] = [];

  _cartValue: TUserSavings['cartValue'] = [];

  _purchases: TUserSavings['purchases'] = {};

  _status: EFetchStatuses = EFetchStatuses.fulfilled;

  _fetchSavingsStatus: EFetchStatuses = EFetchStatuses.fulfilled;

  _api: any = {};

  _initialValues: TUserSavings;

  needsToUpdateDB: boolean = false;

  constructor({ api, initialValues }: { api: any, initialValues: TUserSavings }) {
    this._api = api;
    this._initialValues = initialValues;
    this._setInitialValues();
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

  get purchases() {
    return this._purchases;
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
      this.needsToUpdateDB = true;
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
    this._favorites = this._initialValues[ECollectionPaths.favorites];
    this._cartValue = this._initialValues[ECollectionPaths.cartValue];
    this._purchases = this._initialValues[ECollectionPaths.purchases];
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

      this.needsToUpdateDB = false;

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

export const savingsStore = new UserSavingsStore({ api: savingsApi, initialValues: defaultSavings });
