import { makeAutoObservable } from 'mobx';

import { TPopupConfig } from '../types';

class OverlaysStore {
  _popupsCollection: TPopupConfig[] = [];

  _isMenuOpened: boolean = false;

  _isSearchFilterOpened: boolean = false;

  _isConfirmModalOpened: boolean = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  addPopup(popup: TPopupConfig) {
    this._popupsCollection.push(popup);
  }

  removePopup(popup: TPopupConfig) {
    this._popupsCollection = this._popupsCollection.filter(({ id }) => popup.id !== id);
  }

  get popups() {
    return this._popupsCollection;
  }

  get isMenuOpened() {
    return this._isMenuOpened;
  }

  get isSearchFilterOpened() {
    return this._isSearchFilterOpened;
  }

  get isConfirmModalOpened() {
    return this._isConfirmModalOpened;
  }

  openMenu() {
    this._isMenuOpened = true;
  }

  closeMenu() {
    this._isMenuOpened = false;
  }

  openSearchFilter() {
    this._isSearchFilterOpened = true;
  }

  closeSearchFilter() {
    this._isSearchFilterOpened = false;
  }

  openConfirmModal() {
    this._isConfirmModalOpened = true;
  }

  closeConfirmModal() {
    this._isConfirmModalOpened = false;
  }
}

export const overlaysStore = new OverlaysStore();
