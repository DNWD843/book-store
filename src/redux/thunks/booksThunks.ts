import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchBookByBookId, fetchBooks, updateBook, updateBooksCollection } from '../../api';
import { TBookInfo } from '../../types';
import { ECollectionsNames } from '../../enums/slicesNames';

export const getBooks = createAsyncThunk(
  `${ECollectionsNames.booksCollection}/getBooks`,
  async () => fetchBooks(),
);

export const getBookById = createAsyncThunk(
  `${ECollectionsNames.bookDetails}/getBookById`,
  async (bookId: TBookInfo['id']) => fetchBookByBookId(bookId),
);

export const updateBookInCollection = createAsyncThunk(
  `${ECollectionsNames.booksCollection}/updateBook`,
  async (book: TBookInfo) => updateBook(book).then(() => book),
);

export const updateBooksCatalogue = createAsyncThunk(
  `${ECollectionsNames.booksCollection}/updateBooksCatalogue`,
  async () => updateBooksCollection(),
);
