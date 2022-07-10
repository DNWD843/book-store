import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { TBookInfo } from '../types';

import bookDetailsReducer, { TBookDetailsState } from './reducers/bookDetailsReducer';
import booksReducer, { IBooksState } from './reducers/booksReducer';
import userReducer from './reducers/userReducer';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    bookDetails: bookDetailsReducer,
    user: userReducer,
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
export const selectBooksFetchingStatus = (state: RootState): IBooksState['status'] => state.books.status;
export const selectActiveCardId = (state:RootState): IBooksState['activeCardId'] => state.books.activeCardId;
export const selectBookDetailsFetchingStatus = (state: RootState): TBookDetailsState['status'] => state.bookDetails.status;
export const selectBookDetails = (state: RootState): TBookDetailsState['book'] => state.bookDetails.book;
