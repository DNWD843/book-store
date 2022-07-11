import { createSlice } from '@reduxjs/toolkit';

import { EFetchStatuses } from '../../enums';
import { EReducersNames } from '../reducersNames';
import { registerUser } from '../thunks';
import { loginUser } from '../thunks/authThunks';

export interface IAuthState {
  status: EFetchStatuses,
  error: string,
  user: any,
}

const initialState: IAuthState = {
  status: EFetchStatuses.fulfilled,
  error: '',
  user: {},
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
      })
      .addCase(loginUser.pending, (state) => {
        state.status = EFetchStatuses.pending;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = EFetchStatuses.rejected;
        state.error = action.error.message ?? 'Error';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = EFetchStatuses.fulfilled;
        state.user = action.payload;
      });
  },
});

export const { actions: userActions } = userSlice;

export default userSlice.reducer;
