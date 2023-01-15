import { createAsyncThunk } from '@reduxjs/toolkit';

import {fetchBookByBookId, fetchBooks, updateBook, updateBooksCollection} from '../../api';
import { TBookInfo } from '../../types';
import { ESlicesNames } from '../slicesNames';

export const getBooks = createAsyncThunk(
  `${ESlicesNames.booksCollection}/getBooks`,
  async () => fetchBooks(),
);

export const getBookById = createAsyncThunk(
  `${ESlicesNames.bookDetails}/getBookById`,
  async (bookId: TBookInfo['id']) => fetchBookByBookId(bookId),
);

export const updateBookInCollection = createAsyncThunk(
  `${ESlicesNames.booksCollection}/updateBook`,
  async (book: TBookInfo) => updateBook(book).then(() => book),
);

export const updateBooksCatalogue = createAsyncThunk(
  `${ESlicesNames.booksCollection}/updateBooksCatalogue`,
  async () => updateBooksCollection(),
);
