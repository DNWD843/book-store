import { mockedData } from '../constants/mocks';
import { TBookDetails, TBookInfo } from '../types';

export const fetchBooks = () => new Promise<{ data: TBookInfo[] }>((resolve) => {
  setTimeout(() => resolve({ data: mockedData }), 2000);
});

export const fetchBookByBookId = (bookId: number) => new Promise<{ data: TBookDetails }>((resolve) => {
  const selectedBook = mockedData.find((book) => book.id === bookId) ?? null;

  setTimeout(() => resolve({ data: selectedBook }), 1500);
});
