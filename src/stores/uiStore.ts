import { makeAutoObservable } from 'mobx';

type TMatchMediaValues = {
  isSmallScreen: boolean,
  isMobile: boolean,
  isTablet: boolean,
  isDesktop: boolean
};

const initialValues: TMatchMediaValues = { isSmallScreen: false, isMobile: false, isTablet: false, isDesktop: false };

class UiStore {
  _screen: TMatchMediaValues;

  constructor(screenValues: TMatchMediaValues) {
    makeAutoObservable(this);
    this._screen = { ...screenValues };
  }

  set screen(values: TMatchMediaValues) {
    this._screen = values;
  }

  get screen() {
    return this._screen;
  }
}

export const uiStore = new UiStore(initialValues);
