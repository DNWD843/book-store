import { mockedData } from '../constants/mocks';
import { TBookInfo } from '../types';

export const fetchBooks = () => new Promise<{ data: TBookInfo[] }>((resolve) => {
  setTimeout(() => resolve({ data: mockedData }), 2500);
});
