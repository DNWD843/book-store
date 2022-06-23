import { configureStore, ThunkAction, Action, createSlice } from '@reduxjs/toolkit';

import { TBook } from '../types';

import { getBooks } from './thunks';

export interface IState {
  status: 'idle' | 'loading' | 'failed';
  booksCollection: TBook[];
}

const initialState: IState = {
  status: 'idle',
  booksCollection: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBooks.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.status = 'idle';
        state.booksCollection = action.payload;
      });
  },
});

export const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
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

export const selectBooks = (state: RootState) => state.books.booksCollection;
export const selectStatus = (state: RootState) => state.books.status;

export const { actions } = booksSlice;
