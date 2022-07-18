import { createAsyncThunk } from '@reduxjs/toolkit';
import { storage, keys } from 'utils';

import { fetchBookByBookId, fetchBooks } from '../../api';
import { TBookInfo } from '../../types';
import { EReducersNames } from '../reducersNames';

export const getBooks = createAsyncThunk(
  `${EReducersNames.books}/getBooks`,
  async () => {
    const books = await fetchBooks();

    storage.setData(keys.BOOKS, books || []);
    return books;
  },
);

export const getBookById = createAsyncThunk(
  `${EReducersNames.bookDetails}/getBookById`,
  async (bookId: TBookInfo['id']) => {
    const book = await fetchBookByBookId(bookId);

    if (book && book.id) {
      storage.setData(keys.SELECTED_BOOKS, { ...storage.getData(keys.SELECTED_BOOKS), [book.id]: book });
    }

    return book;
  },
);
