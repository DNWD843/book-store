import { createSlice } from '@reduxjs/toolkit';

import { EFetchStatuses } from '../../enums';
import { TBookInfo } from '../../types';
import { ESlicesNames } from '../slicesNames';
import { getBookById } from '../thunks';

export type TBookDetailsState = {
  status: EFetchStatuses
  book: TBookInfo | null
};

const initialState: TBookDetailsState = {
  status: EFetchStatuses.fulfilled,
  book: null,
};

const bookDetailsSlice = createSlice({
  name: ESlicesNames.bookDetails,
  initialState,
  reducers: {
    setBookDetails: (state, { payload }) => {
      state.book = payload;
    },
    clearBookDetailsState: (state) => {
      state.book = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookById.pending, (state) => {
        state.status = EFetchStatuses.pending;
      })
      .addCase(getBookById.rejected, (state) => {
        state.status = EFetchStatuses.rejected;
        state.book = null;
      })
      .addCase(getBookById.fulfilled, (state, action) => {
        state.status = EFetchStatuses.fulfilled;
        state.book = action.payload;
      });
  },
});

export const { actions: bookDetailsActions } = bookDetailsSlice;

export default bookDetailsSlice.reducer;
