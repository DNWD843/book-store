import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

import { EFetchStatuses } from '../../enums';
import { IBooksCollection } from '../../types';
import { ESlicesNames } from '../slicesNames';
import { getBooks } from '../thunks';

export interface IBooksState extends IBooksCollection{
  status: EFetchStatuses;
}

const initialState: IBooksState = {
  status: EFetchStatuses.fulfilled,
  books: null,
};

const booksSlice = createSlice({
  name: ESlicesNames.booksCollection,
  initialState,
  reducers: {
    clearBooksState: (state: Draft<IBooksState>) => {
      state.books = null;
    },
    setBooksToStore: (state, action: PayloadAction<IBooksCollection>) => ({ ...state, ...action.payload }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.status = EFetchStatuses.pending;
      })
      .addCase(getBooks.rejected, (state) => {
        state.status = EFetchStatuses.rejected;
      })
      .addCase(getBooks.fulfilled, (state, { payload }: PayloadAction<IBooksCollection>) => (
        { ...state, ...payload, status: EFetchStatuses.fulfilled }
      ));
  },
});

export default booksSlice.reducer;

export const { actions: booksActions } = booksSlice;
