import { createAsyncThunk } from '@reduxjs/toolkit';
import { storage, keys } from 'utils';

import { fetchBookByBookId, fetchBooks } from '../../api';
import { TBookInfo } from '../../types';
import { ESlicesNames } from '../slicesNames';

export const getBooks = createAsyncThunk(
  `${ESlicesNames.books}/getBooks`,
  async () => {
    const books = await fetchBooks();

    storage.setData(keys.BOOKS, books);
    return books;
  },
);

export const getBookById = createAsyncThunk(
  `${ESlicesNames.bookDetails}/getBookById`,
  async (bookId: TBookInfo['id']) => {
    const book = await fetchBookByBookId(bookId);

    if (book && book.id) {
      storage.setData(keys.VIEWED_BOOKS, { ...storage.getData(keys.VIEWED_BOOKS), [book.id]: book });
    }

    return book;
  },
);
