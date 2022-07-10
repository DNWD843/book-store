import { collection, getDocs, setDoc, doc, getDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

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
  return querySnapshot.docs.map((document) => document.data() as unknown as TBookInfo);
};

// export const fetchBookByBookId = (bookId: number) => new Promise<{ data: TBookInfo | null }>((resolve) => {
//   const selectedBook = mockedData.find((book) => book.id === bookId) ?? null;
//
//   setTimeout(() => resolve({ data: selectedBook }), 1500);
// });

export const fetchBookByBookId = async (bookId: string) => {
  const docSnap = await getDoc(doc(db, EReducersNames.books, bookId));

  if (docSnap.exists()) {
    return docSnap.data() as unknown as TBookInfo;
  }
  throw new Error('Документ не найден');
};
