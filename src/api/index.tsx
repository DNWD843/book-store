import { mockedData } from '../constants/mocks';
import { TBook } from '../types';

export const fetchBooks = () => new Promise<{ data: TBook[] }>((resolve) => {
  setTimeout(() => resolve({ data: mockedData }), 2500);
});
