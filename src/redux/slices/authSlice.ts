import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EFetchStatuses } from '../../enums';
import { TUser } from '../../types';
import { EReducersNames } from '../reducersNames';
import { registerUser, loginUser } from '../thunks';

export interface IAuthState {
  status: EFetchStatuses,
  authError: string,
  userData: TUser,
}

const initialState: IAuthState = {
  status: EFetchStatuses.fulfilled,
  authError: '',
  userData: {
    userId: null,
    email: null,
    displayName: null,
    phoneNumber: null,
    photoURL: null,
    isAnonymous: true,
    isAdmin: false,
  },
};

const authSlice = createSlice({
  name: EReducersNames.auth,
  initialState,
  reducers: {
    clearAuthError: (state) => { state.authError = ''; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = EFetchStatuses.pending;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = EFetchStatuses.rejected;
        state.authError = action.error.message ?? 'Error';
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = EFetchStatuses.fulfilled;
        state.authError = '';
      });

    builder
      .addCase(loginUser.pending, (state) => {
        state.status = EFetchStatuses.pending;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = EFetchStatuses.rejected;
        state.authError = action.error.message ?? 'Error';
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<TUser>) => {
        state.status = EFetchStatuses.fulfilled;
        state.userData = action.payload;
        state.authError = '';
      });
  },
});

export const { actions: authActions } = authSlice;

export default authSlice.reducer;