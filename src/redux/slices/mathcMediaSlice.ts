import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ECollectionsNames } from '../../enums/slicesNames';

export type TMatchMediaState = {
  isSmallScreen: boolean,
  isMobile: boolean,
  isTablet: boolean,
  isDesktop: boolean,
};
const initialState: TMatchMediaState = {
  isSmallScreen: false,
  isMobile: false,
  isTablet: false,
  isDesktop: false,
};

const matchMediaSlice = createSlice({
  name: ECollectionsNames.matchMedia,
  initialState,
  reducers: {
    setMedia: (state, { payload }: PayloadAction<TMatchMediaState>) => ({ ...payload }),
  },
});

export const { actions: matchMediaActions, reducer: matchMediaReducer } = matchMediaSlice;
