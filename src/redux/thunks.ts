import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchBookByBookId, fetchBooks } from '../api';
import { TBookInfo } from '../types';

import { EReducersNames } from './reducersNames';

export const getBooks = createAsyncThunk(
  `${EReducersNames.books}/getBooks`,
  async () => fetchBooks(),
);

export const getBookById = createAsyncThunk(
  `${EReducersNames.bookDetails}/getBookById`,
  async (bookId: TBookInfo['id']) => fetchBookByBookId(bookId),
);
