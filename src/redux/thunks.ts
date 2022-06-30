import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchBookByBookId, fetchBooks } from '../api';

import { EReducersNames } from './reducersNames';

export const getBooks = createAsyncThunk(
  `${EReducersNames.books}/getBooks`,
  async () => {
    const response = await fetchBooks();
    return response.data;
  },
);

export const getBookById = createAsyncThunk(
  `${EReducersNames.bookDetails}/getBookById`,
  async (bookId: number) => {
    const response = await fetchBookByBookId(bookId);
    return response.data;
  },
);
