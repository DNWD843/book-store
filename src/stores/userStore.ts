import { makeAutoObservable } from 'mobx';

import { userApi } from '../api';
import { defaultMessages } from '../constants';
import { EFetchStatuses } from '../enums';
import { TAuthFormValues, TCredentialsToUpdate, TUser, TUserData } from '../types';

const defaultUserData: TUser = {
  userId: '',
  email: null,
  displayName: null,
  phoneNumber: null,
  photoURL: null,
  isAnonymous: true,
  isAdmin: false,
};

class UserStore {
  _user: TUser;

  status: EFetchStatuses = EFetchStatuses.fulfilled;

  _api: any = {};

  constructor({ initialData, api }: { initialData: TUser, api: any }) {
    makeAutoObservable(this);
    this._user = initialData;
    this._api = api;
  }

  setUserToStore = (data: TUserData) => {
    this._user = { ...this._user, ...data };
  };

  get user() {
    return this._user;
  }

  *register(credentials: TAuthFormValues) {
    this.status = EFetchStatuses.pending;
    try {
      const registeredUser: TUser = yield this._api.createUser(credentials);
      const areSavingsCreated: boolean = yield this._createSavings();

      if (!areSavingsCreated) {
        throw new Error(defaultMessages.unexpectedError);
      }
      this.status = EFetchStatuses.fulfilled;

      return registeredUser;
    } catch (err) {
      this.status = EFetchStatuses.rejected;
      throw err;
    }
  }

  *login(credentials: TAuthFormValues) {
    this.status = EFetchStatuses.pending;
    try {
      const authorizedUser: TUser = yield this._api.loginUserByEmail(credentials);
      this.setUserToStore(authorizedUser);

      return authorizedUser;
    } catch (err) {
      this.status = EFetchStatuses.rejected;
      throw err;
    }
  }

  *logout() {
    this.status = EFetchStatuses.pending;
    try {
      const isLoggedOut: boolean = yield this._api.logout();

      if (!isLoggedOut) {
        throw new Error(defaultMessages.unexpectedError);
      }

      this.setUserToStore(defaultUserData);
      // TODO: чистить сохранения юзера?
    } catch (err) {
      this.status = EFetchStatuses.rejected;
      throw err;
    }
  }

  *updateProfile(credentials: TCredentialsToUpdate) {
    this.status = EFetchStatuses.pending;
    try {
      const isProfileUpdated: boolean = yield this._api.updateUserProfile(credentials);

      if (!isProfileUpdated) {
        throw new Error(defaultMessages.unexpectedError);
      }

      // TODO:  тут что-то сделать с обновленным профилем
      this.status = EFetchStatuses.fulfilled;
    } catch (err) {
      this.status = EFetchStatuses.rejected;
      throw err;
    }
  }

  *updateLogin({ email }: { email: TUser['email'] }) {
    this.status = EFetchStatuses.pending;
    try {
      const isLoginUpdated: boolean = yield this._api.updateUserEmail({ email });

      if (!isLoginUpdated) {
        throw new Error(defaultMessages.unexpectedError);
      }

      // TODO: save new login

      this.status = EFetchStatuses.fulfilled;
    } catch (err) {
      this.status = EFetchStatuses.rejected;
      throw err;
    }
  }

  *deleteProfile() {
    this.status = EFetchStatuses.pending;

    try {
      const isProfileDeleted: boolean = yield this._api.deleteUserProfile();

      if (!isProfileDeleted) {
        throw new Error(defaultMessages.unexpectedError);
      }

      // TODO: clear user data and savings and cache??

      this.status = EFetchStatuses.fulfilled;
    } catch (err) {
      this.status = EFetchStatuses.rejected;
      throw err;
    }
  }

  *_createSavings() {
    const res: boolean = yield this._api.createSavings();

    return res;
  }
}

export const userStore = new UserStore({ initialData: defaultUserData, api: userApi });
