import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TPopupConfig, TPopupsState } from '../../types';
import { ESlicesNames } from '../slicesNames';

const initialState: TPopupsState = [];

const popupsSlice = createSlice({
  name: ESlicesNames.popups,
  initialState,
  reducers: {
    addPopup: (state, { payload }: PayloadAction<TPopupConfig>) => {
      state.push(payload);
    },
    removePopup: (state, { payload }: PayloadAction<TPopupConfig['id']>) => [...state.filter((popup) => popup.id !== payload)],
  },
});

export default popupsSlice.reducer;

export const { actions: popupsActions } = popupsSlice;
