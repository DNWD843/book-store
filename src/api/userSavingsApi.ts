import { getAuth } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';

import { userSavingsRequestMessages } from '../constants';
import { ECollectionPaths } from '../enums';
import { db } from '../firebase';
import { ESlicesNames } from '../redux/slicesNames';
import { TUserSavings, TUserSavingsToUpdate } from '../types';

export const createSavings = async (id: TUserSavings['id']) => setDoc(
  doc(db, ESlicesNames.userSavings, id!), {
    [ECollectionPaths.favorites]: [],
    [ECollectionPaths.cartValue]: [],
    [ECollectionPaths.purchases]: {},
  },
);

export const updateSavings = async ({ userId, savings }: TUserSavingsToUpdate) => {
  try {
    return await updateDoc(
      doc(db, ESlicesNames.userSavings, userId!), { ...savings },
    );
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    throw new Error(userSavingsRequestMessages.updateSavingsError);
  }
};

export const fetchSavings = async (id: TUserSavings['id']): Promise<TUserSavings> => {
  try {
    const docSnap = await getDoc(doc(db, ESlicesNames.userSavings, id!));

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

export const deleteSavings = async () => {
  try {
    const auth = getAuth();

    if (!auth.currentUser) return;

    return await deleteDoc(doc(db, ESlicesNames.userSavings, auth.currentUser.uid));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    throw new Error(userSavingsRequestMessages.deleteSavingsError);
  }
};
