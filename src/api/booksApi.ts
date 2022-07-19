import { collection, getDocs, setDoc, doc, getDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

import { db } from '../firebase';
import { ESlicesNames } from '../redux/slicesNames';
import { TBookInfo } from '../types';

/**
 * @description admin only available method. setting a new collection
 */
export const setBooksCollection = async (booksCollection: TBookInfo[]) => {
  booksCollection.forEach((book) => {
    const pathSegment = uuidv4();
    setDoc(doc(db, ESlicesNames.books, pathSegment), { ...book, id: pathSegment });
  });
};

export const fetchBooks = async (): Promise<TBookInfo[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, ESlicesNames.books));
    return querySnapshot.docs.map((document) => document.data() as unknown as TBookInfo);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    throw e;
  }
};

export const fetchBookByBookId = async (bookId: TBookInfo['id']) => {
  try {
    const docSnap = await getDoc(doc(db, ESlicesNames.books, bookId));

    if (docSnap.exists()) {
      return docSnap.data() as unknown as TBookInfo;
    }
    return null;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    throw e;
  }
};
