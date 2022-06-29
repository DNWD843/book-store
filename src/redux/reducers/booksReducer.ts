import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

import { EFetchStatuses } from '../../enums';
import { TBookInfo } from '../../types';
import { getBooks } from '../thunks';

export type TCardTooltipData = Pick<TBookInfo, 'id' | 'price' | 'author' | 'title'> | null;

export type TCardTooltipInfo = {
  isVisible: boolean;
  data: TCardTooltipData;
};

export type TCardTooltip = {
  [id: string]: TCardTooltipInfo,
};

export interface IState {
  status: EFetchStatuses;
  booksCollection: TBookInfo[];
  cardTooltip: TCardTooltip;
}

const initialState: IState = {
  status: EFetchStatuses.idle,
  booksCollection: [],
  cardTooltip: {},
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    showCardTooltip: (state: Draft<IState>, action: PayloadAction<TCardTooltipData>) => {
      const dataKey = action.payload ? action.payload.id.toString() : '';
      state.cardTooltip = { [dataKey]: { isVisible: true, data: action.payload } };
    },
    hideCardTooltip: (state: Draft<IState>) => {
      state.cardTooltip = {};
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
