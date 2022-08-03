import { createSlice, Draft } from '@reduxjs/toolkit';

import { ESlicesNames } from '../slicesNames';

export interface IProfileState {
  isMenuOpened: boolean,
}

const initialState: IProfileState = {
  isMenuOpened: false,
};

const profileSlice = createSlice({
  name: ESlicesNames.profile,
  initialState,
  reducers: {
    toggleMenu: (state: Draft<IProfileState>) => { state.isMenuOpened = !state.isMenuOpened; },
    openMenu: (state: Draft<IProfileState>) => { state.isMenuOpened = true; },
    closeMenu: (state: Draft<IProfileState>) => { state.isMenuOpened = false; },
  },
  extraReducers: {},
});

export const { actions: profileActions } = profileSlice;
export default profileSlice.reducer;
