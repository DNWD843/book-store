import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EFetchStatuses } from '../../enums';
import { TUser } from '../../types';
import { EReducersNames } from '../reducersNames';
import { registerUser, loginUser } from '../thunks';

export interface IAuthState {
  status: EFetchStatuses,
  error: string,
  user: TUser,
}

const initialState: IAuthState = {
  status: EFetchStatuses.fulfilled,
  error: '',
  user: {
    userId: null,
    email: null,
    displayName: null,
    phoneNumber: null,
    photoURL: null,
    isAnonymous: true,
    isAdmin: false,
  },
};

const userSlice = createSlice({
  name: EReducersNames.auth,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = EFetchStatuses.pending;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = EFetchStatuses.rejected;
        state.error = action.error.message ?? 'Error';
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = EFetchStatuses.fulfilled;
        state.error = '';
      })
      .addCase(loginUser.pending, (state) => {
        state.status = EFetchStatuses.pending;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = EFetchStatuses.rejected;
        state.error = action.error.message ?? 'Error';
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<TUser>) => {
        state.status = EFetchStatuses.fulfilled;
        state.user = action.payload;
        state.error = '';
      });
  },
});

export const { actions: userActions } = userSlice;

export default userSlice.reducer;
