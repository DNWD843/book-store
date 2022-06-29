import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

import { EFetchStatuses } from '../../enums';
import { TBookInfo } from '../../types';
import { getBooks } from '../thunks';

export interface IState {
  status: EFetchStatuses;
  booksCollection: TBookInfo[];
  activeCardId: number;
}

const initialState: IState = {
  status: EFetchStatuses.idle,
  booksCollection: [],
  activeCardId: 0,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    showCardTooltip: (state: Draft<IState>, action: PayloadAction<number>) => {
      state.activeCardId = action.payload;
    },
    hideCardTooltip: (state: Draft<IState>) => {
      state.activeCardId = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.status = EFetchStatuses.loading;
      })
      .addCase(getBooks.rejected, (state) => {
        state.status = EFetchStatuses.failed;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.status = EFetchStatuses.idle;
        state.booksCollection = action.payload;
      });
  },
});

export default booksSlice.reducer;

export const { actions } = booksSlice;
