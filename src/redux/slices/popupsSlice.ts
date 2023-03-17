import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ECollectionsNames } from '../../enums';
import { TPopupConfig, TPopupsState } from '../../types';

const initialState: TPopupsState = [];

const popupsSlice = createSlice({
  name: ECollectionsNames.popups,
  initialState,
  reducers: {
    addPopup: (state, { payload }: PayloadAction<TPopupConfig>) => {
      state.push(payload);
    },
    removePopup: (state, { payload }: PayloadAction<TPopupConfig['id']>) => [...state.filter((popup) => popup.id !== payload)],
  },
});

export const { actions: popupsActions, reducer: popupsReducer } = popupsSlice;
