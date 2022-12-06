import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

import { ECollectionPaths } from '../enums';
import { db } from '../firebase';
import { ESlicesNames } from '../redux/slicesNames';
import { TUserSavings, TUserSavingsToUpdate } from '../types';

export const setUserSavings = async (id: TUserSavings['id']) => setDoc(
  doc(db, ESlicesNames.userSavings, id!), { favorites: [], cartValue: [{}] },
);

export const updateUserActions = async ({ id, cartValue, favorites }: TUserSavings) => updateDoc(
  doc(db, ESlicesNames.userSavings, id!), { favorites, cartValue },
);

export const updateUserSavings = async ({ userId, savings }: TUserSavingsToUpdate) => updateDoc(
  doc(db, ESlicesNames.userSavings, userId!), { ...savings },
);

export const fetchUserSavings = async (id: TUserSavings['id']): Promise<TUserSavings> => {
  try {
    const docSnap = await getDoc(doc(db, ESlicesNames.userSavings, id!));

    if (docSnap.exists()) {
      return docSnap.data() as unknown as TUserSavings;
    }

    return { [ECollectionPaths.favorites]: [], [ECollectionPaths.cartValue]: [] };
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    throw e;
  }
};
