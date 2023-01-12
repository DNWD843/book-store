import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EFetchStatuses } from '../../enums';
import { TUser, TUserData } from '../../types';
import { ESlicesNames } from '../slicesNames';
import { auth } from '../thunks';

export interface IAuthState {
  status: EFetchStatuses,
  authError: string,
  userData: TUserData,
}

const userDefault: TUser = {
  userId: '',
  email: null,
  displayName: null,
  phoneNumber: null,
  photoURL: null,
  isAnonymous: true,
  isAdmin: false,
};

const initialState: IAuthState = {
  status: EFetchStatuses.fulfilled,
  authError: '',
  userData: userDefault,
};

const authSlice = createSlice({
  name: ESlicesNames.auth,
  initialState,
  reducers: {
    clearAuthError: (state) => { state.authError = ''; },
    setUserToStore: (state, action: PayloadAction<TUserData>) => {
      state.userData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(auth.registerUser.pending, (state) => { state.status = EFetchStatuses.pending; })
      .addCase(auth.registerUser.rejected, (state, action) => {
        state.status = EFetchStatuses.rejected;
        state.authError = action.error.message ?? 'Error';
      })
      .addCase(auth.registerUser.fulfilled, (state) => {
        state.status = EFetchStatuses.fulfilled;
        state.authError = '';
      });

    builder
      .addCase(auth.loginUser.pending, (state) => { state.status = EFetchStatuses.pending; })
      .addCase(auth.loginUser.rejected, (state, action) => {
        state.status = EFetchStatuses.rejected;
        state.authError = action.error.message ?? 'Error';
      })
      .addCase(auth.loginUser.fulfilled, (state, action: PayloadAction<TUser>) => {
        state.status = EFetchStatuses.fulfilled;
        state.userData = action.payload;
        state.authError = '';
      });

    builder
      .addCase(auth.logoutUser.pending, (state) => { state.status = EFetchStatuses.pending; })
      .addCase(auth.logoutUser.rejected, (state, action) => {
        state.status = EFetchStatuses.rejected;
        state.authError = action.error.message ?? 'Error';
      })
      .addCase(auth.logoutUser.fulfilled, (state) => {
        state.status = EFetchStatuses.fulfilled;
        state.userData = userDefault;
        state.authError = '';
      });

    builder
      .addCase(auth.loginUserAnonymously.pending, (state) => { state.status = EFetchStatuses.pending; })
      .addCase(auth.loginUserAnonymously.rejected, (state) => { state.status = EFetchStatuses.rejected; })
      .addCase(auth.loginUserAnonymously.fulfilled, (state, action: PayloadAction<TUser>) => {
        state.status = EFetchStatuses.fulfilled;
        state.userData = action.payload;
        state.authError = '';
      });

    builder
      .addCase(auth.updateUserData.pending, (state) => { state.status = EFetchStatuses.pending; })
      .addCase(auth.updateUserData.rejected, (state, action) => {
        state.status = EFetchStatuses.rejected;
        state.authError = action.error.message ?? 'Error';
      })
      .addCase(auth.updateUserData.fulfilled, (state) => {
        state.status = EFetchStatuses.fulfilled;
        state.authError = '';
      });

    builder
      .addCase(auth.updateUserLogin.pending, (state) => { state.status = EFetchStatuses.pending; })
      .addCase(auth.updateUserLogin.rejected, (state, action) => {
        state.status = EFetchStatuses.rejected;
        state.authError = action.error.message ?? 'Error';
      })
      .addCase(auth.updateUserLogin.fulfilled, (state) => {
        state.status = EFetchStatuses.fulfilled;
        state.authError = '';
      });
  },
});

export const { actions: authActions } = authSlice;

export default authSlice.reducer;
