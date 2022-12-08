import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EFetchStatuses } from '../../enums';
import { TUserSavings } from '../../types';
import { ESlicesNames } from '../slicesNames';
import { createUserSavings, getUserSavings, updateUserSavings } from '../thunks';

const initialState: TUserSavings = {
  status: EFetchStatuses.fulfilled,
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
      state.status = initialState.status;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserSavings.pending, (state) => { state.status = EFetchStatuses.pending; })
      .addCase(createUserSavings.rejected, (state) => { state.status = EFetchStatuses.rejected; })
      .addCase(createUserSavings.fulfilled, (state) => { state.status = EFetchStatuses.fulfilled; });

    builder
      .addCase(getUserSavings.pending, (state) => { state.status = EFetchStatuses.pending; })
      .addCase(getUserSavings.rejected, (state) => { state.status = EFetchStatuses.rejected; })
      .addCase(getUserSavings.fulfilled, (state, { payload }: PayloadAction<TUserSavings>) => {
        state.status = EFetchStatuses.rejected;
        state.favorites = payload.favorites;
        state.cartValue = payload.cartValue;
      });

    builder
      .addCase(updateUserSavings.pending, (state) => { state.status = EFetchStatuses.pending; })
      .addCase(updateUserSavings.rejected, (state) => { state.status = EFetchStatuses.rejected; })
      .addCase(updateUserSavings.fulfilled, (state) => { state.status = EFetchStatuses.fulfilled; });
  },
});

export default userSavingsSlice.reducer;

export const { actions: userSavingsActions } = userSavingsSlice;
