import { createSlice } from '@reduxjs/toolkit';

import { ESlicesNames } from '../slicesNames';

export type THeaderActionsState = {
  isMenuOpened: boolean,
  isSearchFilterOpened: boolean,
};

const initialState: THeaderActionsState = {
  isMenuOpened: false,
  isSearchFilterOpened: false,
};

const headerActionsSlice = createSlice({
  name: ESlicesNames.headerActions,
  initialState,
  reducers: {
    openMenu: (state) => { state.isMenuOpened = true; },
    closeMenu: (state) => { state.isMenuOpened = false; },
    openSearchFilter: (state) => { state.isSearchFilterOpened = true; },
    closeSearchFilter: (state) => { state.isSearchFilterOpened = false; },
  },
});

export const { actions: headerActions, reducer: headerActionsReducer } = headerActionsSlice;
