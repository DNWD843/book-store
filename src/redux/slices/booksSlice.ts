import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

import { EFetchStatuses } from '../../enums';
import { IBooksCollection } from '../../types';
import { ESlicesNames } from '../slicesNames';
import { getBooks } from '../thunks';

export interface IBooksState extends IBooksCollection{
  status: EFetchStatuses;
  favoriteStatus: EFetchStatuses;
}

const initialState: IBooksState = {
  status: EFetchStatuses.fulfilled,
  favoriteStatus: EFetchStatuses.fulfilled,
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
    // updateBookInStore: (state, action: PayloadAction<TBookInfo>) => {
    //   const updatedBooks = state.books?.map((book) => {
    //     if (book.id === action.payload.id) {
    //       return action.payload;
    //     }
    //
    //     return book;
    //   });
    //   state.books = updatedBooks ?? null;
    // },
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

    // builder
    //   .addCase(updateBookInCollection.pending, (state) => { state.favoriteStatus = EFetchStatuses.pending; })
    //   .addCase(updateBookInCollection.rejected, (state) => { state.favoriteStatus = EFetchStatuses.rejected; })
    //   .addCase(updateBookInCollection.fulfilled, (state, { payload }: PayloadAction<TBookInfo>) => {
    //     const updatedBooks = state.books?.map((book) => {
    //       if (book.id === payload.id) {
    //         return payload;
    //       }
    //
    //       return book;
    //     });
    //
    //     return ({ ...state, books: updatedBooks || null, favoriteStatus: EFetchStatuses.fulfilled });
    //   });
  },
});

export default booksSlice.reducer;

export const { actions: booksActions } = booksSlice;
