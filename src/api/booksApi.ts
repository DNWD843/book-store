import { collection, getDocs, setDoc, doc, getDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

import { REQUEST_DELAY, orderSubmitMessages, booksRequestMessages, mockedBooksCatalogue } from '../constants';
import { ECollectionsNames } from '../enums';
import { db } from '../firebase';
import { IBooksCollection, TBookInfo } from '../types';

class BooksApi {
  /**
   * @description admin only available method. setting a new collection
   */
  updateBooksCollection = async (): Promise<IBooksCollection> => {
    try {
      await Promise.all(mockedBooksCatalogue.map((book) => {
        const pathSegment = uuidv4();
        return setDoc(doc(db, ECollectionsNames.booksCollection, pathSegment), { ...book, id: pathSegment });
      }));

      const querySnapshot = await getDocs(collection(db, ECollectionsNames.booksCollection));

      const books = querySnapshot.docs.map((document) => document.data() as unknown as TBookInfo);

      return ({
        books,
        updatedAt: Date.now(),
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);

      throw new Error(booksRequestMessages.updateCollectionError);
    }
  };

  fetchBooks = async (): Promise<IBooksCollection> => {
    try {
      const querySnapshot = await getDocs(collection(db, ECollectionsNames.booksCollection));

      const books = querySnapshot.docs.map((document) => document.data() as unknown as TBookInfo);

      return ({
        books,
        updatedAt: Date.now(),
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      throw new Error(booksRequestMessages.error);
    }
  };

  fetchBookByBookId = async (bookId: TBookInfo['id']) => {
    try {
      const docSnap = await getDoc(doc(db, ECollectionsNames.booksCollection, bookId));

      if (docSnap.exists()) {
        const response = docSnap.data() as unknown as TBookInfo;

        if (response.id === bookId) {
          return response;
        }
      }

      return null;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      throw new Error(booksRequestMessages.requestByIdError);
    }
  };

  buyBooks = async (): Promise<any> => {
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
}

export const booksApi = new BooksApi();
