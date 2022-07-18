import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EFetchStatuses } from '../../enums';
import { TUser } from '../../types';
import { EReducersNames } from '../reducersNames';
import { auth } from '../thunks';
import { loginUserAnonymously, logoutUser } from '../thunks/authThunks';

export type TUserData = TUser | null;

export interface IAuthState {
  status: EFetchStatuses,
  authError: string,
  userData: TUserData,
}

const userDefault: TUser = {
  userId: null,
  email: null,
  displayName: null,
  phoneNumber: null,
  photoURL: null,
  isAnonymous: false,
  isAdmin: false,
};

const initialState: IAuthState = {
  status: EFetchStatuses.fulfilled,
  authError: '',
  userData: null,
};

const authSlice = createSlice({
  name: EReducersNames.auth,
  initialState,
  reducers: {
    clearAuthError: (state) => { state.authError = ''; },
    setUserToStore: (state, action: PayloadAction<TUserData>) => {
      state.userData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(auth.registerUser.pending, (state) => {
        state.status = EFetchStatuses.pending;
      })
      .addCase(auth.registerUser.rejected, (state, action) => {
        state.status = EFetchStatuses.rejected;
        state.authError = action.error.message ?? 'Error';
      })
      .addCase(auth.registerUser.fulfilled, (state) => {
        state.status = EFetchStatuses.fulfilled;
        state.authError = '';
      });

    builder
      .addCase(auth.loginUser.pending, (state) => {
        state.status = EFetchStatuses.pending;
      })
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
      .addCase(logoutUser.pending, (state) => {
        state.status = EFetchStatuses.pending;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = EFetchStatuses.rejected;
        state.authError = action.error.message ?? 'Error';
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.status = EFetchStatuses.fulfilled;
        state.userData = userDefault;
        state.authError = '';
      });

    builder
      .addCase(loginUserAnonymously.pending, (state) => {
        state.status = EFetchStatuses.pending;
      })
      .addCase(loginUserAnonymously.rejected, (state, action) => {
        state.status = EFetchStatuses.rejected;
        state.authError = action.error.message ?? 'Error';
      })
      .addCase(loginUserAnonymously.fulfilled, (state, action: PayloadAction<TUser>) => {
        state.status = EFetchStatuses.fulfilled;
        state.userData = action.payload;
        state.authError = '';
      });
  },
});

export const { actions: authActions } = authSlice;

export default authSlice.reducer;
