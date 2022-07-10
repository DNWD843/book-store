import { createSlice } from '@reduxjs/toolkit';

import { EFetchStatuses } from '../../enums';
import { EReducersNames } from '../reducersNames';
import { registerUser } from '../thunks';

export interface IAuthState {
  status: EFetchStatuses,
  user: any,
}

const initialState: IAuthState = {
  status: EFetchStatuses.idle,
  user: {},
};

const userSlice = createSlice({
  name: EReducersNames.auth,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = EFetchStatuses.loading;
      })
      .addCase(registerUser.rejected, (state) => {
        state.status = EFetchStatuses.failed;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = EFetchStatuses.idle;
        state.user = action.payload as any;
      });
  },
});

export const { actions: userActions } = userSlice;

export default userSlice.reducer;
