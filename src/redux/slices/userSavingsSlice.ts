import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EFetchStatuses } from '../../enums';
import { TUserSavings } from '../../types';
import { ESlicesNames } from '../slicesNames';
import { createUserSavings, updateUserSavings } from '../thunks';

const initialState: TUserSavings = {
  resetStatus: EFetchStatuses.fulfilled,
  favorites: [],
  cartValue: [],
};

const userSavingsSlice = createSlice({
  name: ESlicesNames.userSavings,
  initialState,
  reducers: {
    setUserSavingsToStore: (state, { payload }: PayloadAction<TUserSavings>) => {
      state.favorites = payload.favorites;
      state.cartValue = payload.cartValue;
    },
    removeUserActionsFromStore: (state) => {
      state.cartValue = initialState.cartValue;
      state.favorites = initialState.favorites;
      state.resetStatus = initialState.resetStatus;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserSavings.pending, (state) => { state.resetStatus = EFetchStatuses.pending; })
      .addCase(createUserSavings.rejected, (state) => { state.resetStatus = EFetchStatuses.rejected; })
      .addCase(createUserSavings.fulfilled, (state) => { state.resetStatus = EFetchStatuses.fulfilled; });

    builder
      .addCase(updateUserSavings.pending, (state) => { state.resetStatus = EFetchStatuses.pending; })
      .addCase(updateUserSavings.rejected, (state) => { state.resetStatus = EFetchStatuses.rejected; })
      .addCase(updateUserSavings.fulfilled, (state) => { state.resetStatus = EFetchStatuses.fulfilled; });
  },
});

export default userSavingsSlice.reducer;

export const { actions: userSavingsActions } = userSavingsSlice;
