import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { TBookInfo } from '../types';

import booksReducer, {IState, TCardTooltip, TCardTooltipInfo} from './reducers/booksReducer';

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;

export const selectBooks = (state: RootState): TBookInfo[] => state.books.booksCollection;
export const selectStatus = (state: RootState): IState['status'] => state.books.status;
export const selectCardTooltip = (dataKey: string) => (state:RootState): TCardTooltipInfo => state.books.cardTooltip[dataKey] ?? false;
