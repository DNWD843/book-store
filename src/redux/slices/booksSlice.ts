import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

import { EFetchStatuses } from '../../enums';
import { TBookInfo } from '../../types';
import { EReducersNames } from '../reducersNames';
import { getBooks } from '../thunks';

export interface IBooksState {
  status: EFetchStatuses;
  booksCollection: TBookInfo[];
  activeCardId: string;
}

const initialState: IBooksState = {
  status: EFetchStatuses.fulfilled,
  booksCollection: [],
  activeCardId: '0',
};

const booksSlice = createSlice({
  name: EReducersNames.books,
  initialState,
  reducers: {
    showCardTooltip: (state: Draft<IBooksState>, action: PayloadAction<string>) => {
      state.activeCardId = action.payload;
    },
    hideCardTooltip: (state: Draft<IBooksState>) => {
      state.activeCardId = '0';
    },
    clearBooksState: (state: Draft<IBooksState>) => {
      state.booksCollection = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.status = EFetchStatuses.pending;
      })
      .addCase(getBooks.rejected, (state) => {
        state.status = EFetchStatuses.rejected;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.status = EFetchStatuses.fulfilled;
        state.booksCollection = action.payload;
      });
  },
});

export default booksSlice.reducer;

export const { actions: booksActions } = booksSlice;
