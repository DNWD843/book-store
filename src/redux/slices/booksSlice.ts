import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

import { EFetchStatuses } from '../../enums';
import { IBooksCollection, TBookInfo } from '../../types';
import { ESlicesNames } from '../slicesNames';
import { getBooks, updateBooksCatalogue } from '../thunks';

export interface IBooksState extends IBooksCollection{
  status: EFetchStatuses;
  favoriteStatus: EFetchStatuses;
  filteredCollection: IBooksCollection['books']
}

const initialState: IBooksState = {
  status: EFetchStatuses.fulfilled,
  favoriteStatus: EFetchStatuses.fulfilled,
  books: null,
  filteredCollection: null,
};

const booksSlice = createSlice({
  name: ESlicesNames.booksCollection,
  initialState,
  reducers: {
    clearBooksState: (state: Draft<IBooksState>) => {
      state.books = null;
    },
    setBooksToStore: (state, action: PayloadAction<IBooksCollection>) => ({ ...state, ...action.payload }),
    filterCollection: (state, { payload }:PayloadAction<string>) => {
      if (state.books && state.books.length && payload) {
        state.filteredCollection = state.books.filter(
          (book) => book.author.toLowerCase().includes(payload.toLowerCase()) || book.title.toLowerCase().includes(payload.toLowerCase()),
        );
      } else {
        state.filteredCollection = null;
      }
    },
    resetFilterCollection: (state) => { state.filteredCollection = null; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => { state.status = EFetchStatuses.pending; })
      .addCase(getBooks.rejected, (state) => { state.status = EFetchStatuses.rejected; })
      .addCase(getBooks.fulfilled, (state, { payload }: PayloadAction<IBooksCollection>) => (
        { ...state, ...payload, status: EFetchStatuses.fulfilled }
      ));

    builder
      .addCase(updateBooksCatalogue.pending, (state) => { state.status = EFetchStatuses.pending; })
      .addCase(updateBooksCatalogue.rejected, (state) => { state.status = EFetchStatuses.rejected; })
      .addCase(updateBooksCatalogue.fulfilled, (state) => { state.status = EFetchStatuses.fulfilled; });
  },
});

export default booksSlice.reducer;

export const { actions: booksActions } = booksSlice;
