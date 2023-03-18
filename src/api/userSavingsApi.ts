import { getAuth } from 'firebase/auth';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';

import { userSavingsRequestMessages } from '../constants';
import { ECollectionPaths, ECollectionsNames } from '../enums';
import { db } from '../firebase';
import { TUser, TUserSavings, TUserSavingsToUpdate } from '../types';

class UserSavingsApi {
  fetchSavings = async (id: TUser['userId']): Promise<TUserSavings | undefined> => {
    try {
      const docSnap = await getDoc(doc(db, ECollectionsNames.userSavings, id));

      if (docSnap.exists()) {
        return docSnap.data() as unknown as TUserSavings;
      }

      return { [ECollectionPaths.favorites]: [], [ECollectionPaths.cartValue]: [], [ECollectionPaths.purchases]: {} };
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      throw new Error(userSavingsRequestMessages.fetchSavingsError);
    }
  };

  updateSavings = async (savings: TUserSavingsToUpdate['savings']): Promise<boolean> => {
    try {
      const auth = getAuth();

      if (!auth.currentUser) {
        return false;
      }

      await updateDoc(doc(db, ECollectionsNames.userSavings, auth.currentUser.uid), { ...savings });

      return true;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      throw new Error(userSavingsRequestMessages.updateSavingsError);
    }
  };

  deleteSavings = async (): Promise<boolean> => {
    try {
      const auth = getAuth();

      if (!auth.currentUser) {
        return false;
      }

      await deleteDoc(doc(db, ECollectionsNames.userSavings, auth.currentUser.uid));

      return true;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      throw new Error(userSavingsRequestMessages.deleteSavingsError);
    }
  };
}

export const savingsApi = new UserSavingsApi();
