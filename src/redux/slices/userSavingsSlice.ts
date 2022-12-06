import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EFetchStatuses } from '../../enums';
import { TUserSavings } from '../../types';
import { ESlicesNames } from '../slicesNames';
import { createUserSavings, resetUserActions, updateSavings } from '../thunks';

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
      .addCase(createUserSavings.fulfilled, (state) => {
        state.resetStatus = EFetchStatuses.fulfilled;
        // TODO дописать редьюсер
      });

    builder
      .addCase(resetUserActions.pending, (state) => { state.resetStatus = EFetchStatuses.pending; })
      .addCase(resetUserActions.rejected, (state) => { state.resetStatus = EFetchStatuses.rejected; })
      .addCase(resetUserActions.fulfilled, (state) => {
        state.resetStatus = EFetchStatuses.fulfilled;
        // TODO дописать редьюсер
      });

    builder
      .addCase(updateSavings.pending, (state) => { state.resetStatus = EFetchStatuses.pending; })
      .addCase(updateSavings.rejected, (state) => { state.resetStatus = EFetchStatuses.rejected; })
      .addCase(updateSavings.fulfilled, (state) => {
        state.resetStatus = EFetchStatuses.fulfilled;
        // TODO дописать редьюсер
      });
  },
});

export default userSavingsSlice.reducer;

export const { actions: userSavingsActions } = userSavingsSlice;
