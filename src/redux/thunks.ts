import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchBooks } from '../api';

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async () => {
    const response = await fetchBooks();
    return response.data;
  },
);
