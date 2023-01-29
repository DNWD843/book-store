import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

import { EFetchStatuses } from '../../enums';
import { IBooksCollection, TUpdateCatalogueRequestResponse } from '../../types';
import { ESlicesNames } from '../slicesNames';
import { getBooks, updateBooksCatalogue } from '../thunks';

export interface IBooksState extends IBooksCollection{
  status: EFetchStatuses;
  favoriteStatus: EFetchStatuses;
  filteredCollection: IBooksCollection['books']
  searchValue: string,
}

const initialState: IBooksState = {
  status: EFetchStatuses.fulfilled,
  favoriteStatus: EFetchStatuses.fulfilled,
  books: null,
  filteredCollection: null,
  searchValue: '',
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
    setSearchValue: (state, { payload }: PayloadAction<string>) => {
      state.searchValue = payload;
    },
    clearSearchValue: (state) => {
      state.filteredCollection = null;
      state.searchValue = '';
    },
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
      .addCase(updateBooksCatalogue.fulfilled, (state, { payload }: PayloadAction<TUpdateCatalogueRequestResponse>) => {
        state.status = EFetchStatuses.fulfilled;
        state.books = payload.books;
        state.updatedAt = payload.updatedAt;
      });
  },
});

export const { actions: booksActions, reducer: booksReducer } = booksSlice;
