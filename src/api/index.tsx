import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

import { mockedData } from '../constants';
import { db } from '../firebase';
import { EReducersNames } from '../redux/reducersNames';
import { TBookInfo } from '../types';

/**
 * @description admin only available method. setting a new collection
 */
export const setBooksCollection = async (booksCollection: TBookInfo[]) => {
  booksCollection.forEach((book) => {
    const pathSegment = uuidv4();
    setDoc(doc(db, EReducersNames.books, pathSegment), { ...book, id: pathSegment });
  });
};

export const fetchBooks = async (): Promise<TBookInfo[]> => {
  const querySnapshot = await getDocs(collection(db, EReducersNames.books));
  return querySnapshot.docs.map((document) => ({ id: document.id, ...document.data() } as unknown as TBookInfo));
};

export const fetchBookByBookId = (bookId: number) => new Promise<{ data: TBookInfo | null }>((resolve) => {
  const selectedBook = mockedData.find((book) => book.id === bookId) ?? null;

  setTimeout(() => resolve({ data: selectedBook }), 1500);
});
