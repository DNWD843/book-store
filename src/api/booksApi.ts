import { collection, getDocs, setDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

import { REQUEST_DELAY, orderSubmitMessages } from '../constants';
import { db } from '../firebase';
import { ESlicesNames } from '../redux/slicesNames';
import { TBookInfo, TSendingOrderData } from '../types';

/**
 * @description admin only available method. setting a new collection
 */
export const setBooksCollection = async (booksCollection: TBookInfo[]) => {
  booksCollection.forEach((book) => {
    const pathSegment = uuidv4();
    setDoc(doc(db, ESlicesNames.booksCollection, pathSegment), { ...book, id: pathSegment });
  });
};

export const fetchBooks = async (): Promise<{ books: TBookInfo[], updatedAt: number }> => {
  try {
    const querySnapshot = await getDocs(collection(db, ESlicesNames.booksCollection));

    const books = querySnapshot.docs.map((document) => document.data() as unknown as TBookInfo);

    return ({
      books,
      updatedAt: new Date().getTime(),
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    throw e;
  }
};

export const fetchBookByBookId = async (bookId: TBookInfo['id']) => {
  try {
    const docSnap = await getDoc(doc(db, ESlicesNames.booksCollection, bookId));

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

export const updateBook = async (bookInfo: TBookInfo) => {
  try {
    return await updateDoc(doc(db, ESlicesNames.booksCollection, bookInfo.id), { ...bookInfo });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const buyBooks = async (data: TSendingOrderData): Promise<any> => {
  const randomNumber = Math.round(Math.random() * 10);

  return new Promise<{ message: string }>((resolve, reject) => {
    setTimeout(() => {
      if (randomNumber < 7) {
        return resolve({ message: orderSubmitMessages.success });
      }
      return reject(new Error(orderSubmitMessages.error));
    }, REQUEST_DELAY);
  });
};
