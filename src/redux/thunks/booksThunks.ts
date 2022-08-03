import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchBookByBookId, fetchBooks } from '../../api';
import { TBookInfo } from '../../types';
import { ESlicesNames } from '../slicesNames';

export const getBooks = createAsyncThunk(
  `${ESlicesNames.books}/getBooks`,
  async () => fetchBooks(),
);

export const getBookById = createAsyncThunk(
  `${ESlicesNames.bookDetails}/getBookById`,
  async (bookId: TBookInfo['id']) => fetchBookByBookId(bookId),
);
