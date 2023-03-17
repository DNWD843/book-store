import { createSlice } from '@reduxjs/toolkit';

import { ECollectionsNames } from '../../enums/slicesNames';

export type THeaderActionsState = {
  isMenuOpened: boolean,
  isSearchFilterOpened: boolean,
  isConfirmModalOpened: boolean,
};

const initialState: THeaderActionsState = {
  isMenuOpened: false,
  isSearchFilterOpened: false,
  isConfirmModalOpened: false,
};

const headerActionsSlice = createSlice({
  name: ECollectionsNames.headerActions,
  initialState,
  reducers: {
    openMenu: (state) => { state.isMenuOpened = true; },
    closeMenu: (state) => { state.isMenuOpened = false; },
    openSearchFilter: (state) => { state.isSearchFilterOpened = true; },
    closeSearchFilter: (state) => { state.isSearchFilterOpened = false; },
    openConfirmModal: (state) => { state.isConfirmModalOpened = true; },
    closeConfirmModal: (state) => { state.isConfirmModalOpened = false; },
  },
});

export const { actions: headerActions, reducer: headerActionsReducer } = headerActionsSlice;
