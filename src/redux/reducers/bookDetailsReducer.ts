import { createSlice } from '@reduxjs/toolkit';

import { EFetchStatuses } from '../../enums';
import { TBookDetails } from '../../types';
import { EReducersNames } from '../reducersNames';
import { getBookById } from '../thunks';

export type TBookDetailsState = {
  status: EFetchStatuses
  book: TBookDetails
};

const initialState: TBookDetailsState = {
  status: EFetchStatuses.idle,
  book: null,
};

const bookDetailsSlice = createSlice({
  name: EReducersNames.bookDetails,
  initialState,
  reducers: {
    clearBookDetailsState: (state) => {
      state.book = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookById.pending, (state) => {
        state.status = EFetchStatuses.loading;
      })
      .addCase(getBookById.rejected, (state) => {
        state.status = EFetchStatuses.failed;
      })
      .addCase(getBookById.fulfilled, (state, action) => {
        state.status = EFetchStatuses.idle;
        state.book = action.payload;
      });
  },
});

export const { actions: bookDetailsActions } = bookDetailsSlice;

export default bookDetailsSlice.reducer;