import { makeAutoObservable } from 'mobx';

import { savingsApi } from '../api';
import { defaultMessages } from '../constants';
import { ECollectionPaths, EFetchStatuses } from '../enums';
import { TBookInfo, TUserSavings } from '../types';

const defaultSavings: TUserSavings = {
  [ECollectionPaths.favorites]: [],
  [ECollectionPaths.cartValue]: [],
  [ECollectionPaths.purchases]: {},
};

class UserSavingsStore {
  _favorites: TUserSavings['favorites'] = [];

  _cartValue: TUserSavings['cartValue'] = [];

  _purchases: TUserSavings['purchases'] = {};

  status: EFetchStatuses = EFetchStatuses.fulfilled;

  _api: any = {};

  _initialValues: TUserSavings;

  needsToUpdateDB: boolean = false;

  constructor({ api, initialValues }: { api: any, initialValues: TUserSavings }) {
    this._api = api;
    this._initialValues = initialValues;
    this._setInitialValues();
    makeAutoObservable(this);
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
    this._cartValue.push(book);
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

  *fetchSavings() {
    this.status = EFetchStatuses.pending;

    try {
      const savingsFromDB: TUserSavings = yield this._api.fetchSavings();
      this._setSavings(savingsFromDB);
      this.status = EFetchStatuses.fulfilled;
    } catch (err) {
      this.status = EFetchStatuses.rejected;
      throw err;
    }
  }

  *updateSavingsInDB() {
    this.status = EFetchStatuses.pending;

    try {
      const areSavingsUpdated: boolean = yield this._api.updateSavings(this.savings);

      if (!areSavingsUpdated) {
        throw new Error(defaultMessages.unexpectedError);
      }

      this.needsToUpdateDB = false;
      this.status = EFetchStatuses.fulfilled;
    } catch (err) {
      this.status = EFetchStatuses.rejected;
      throw err;
    }
  }

  *deleteSavings() {
    this.status = EFetchStatuses.pending;

    try {
      const areSavingsDeleted: boolean = yield this._api.deleteSavings();

      if (!areSavingsDeleted) {
        throw new Error(defaultMessages.unexpectedError);
      }

      this._setInitialValues();
      this.status = EFetchStatuses.fulfilled;
    } catch (err) {
      this.status = EFetchStatuses.rejected;
      throw err;
    }
  }
}

export const savingsStore = new UserSavingsStore({ api: savingsApi, initialValues: defaultSavings });
