import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, updateEmail, getAuth, deleteUser } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import {
  defaultMessages,
  loginRequestMessages,
  registerRequestMessages,
  updateProfileRequestMessages,
} from '../constants';
import { ECollectionPaths } from '../enums';
import { appAuth, db } from '../firebase';
import { ESlicesNames } from '../redux/slicesNames';
import { TAuthFormValues, TCredentialsToUpdate, TUser } from '../types';

const admins = ['dima@mail.ru'];
const adminsSet = new Set<string>(admins);

class UserApi {
  isLoggedIn = () => getAuth().currentUser;

  createUser = async ({ email, password }: TAuthFormValues): Promise<TUser> => {
    try {
      const credentials = await createUserWithEmailAndPassword(appAuth, email, password);
      const { uid, email: userEmail, displayName, phoneNumber, photoURL, isAnonymous } = credentials.user;

      return {
        userId: uid,
        email: userEmail,
        phoneNumber,
        photoURL,
        displayName,
        isAnonymous,
        isAdmin: adminsSet.has(userEmail ?? ''),
        lastLoginAt: new Date().getTime(),
      };
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw { message: registerRequestMessages.error };
    }
  };

  loginUserByEmail = async ({ email, password }: TAuthFormValues): Promise<TUser> => {
    try {
      const credentials = await signInWithEmailAndPassword(appAuth, email, password);
      const { uid, email: userEmail, displayName, phoneNumber, photoURL, isAnonymous } = credentials.user;

      return {
        userId: uid,
        email: userEmail,
        phoneNumber,
        photoURL,
        displayName,
        isAnonymous,
        isAdmin: adminsSet.has(userEmail ?? ''),
        lastLoginAt: new Date().getTime(),
      };
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw new Error(loginRequestMessages.error);
    }
  };

  logout = async (): Promise<boolean> => {
    try {
      await appAuth.signOut();

      return true;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw new Error(defaultMessages.unexpectedError);
    }
  };

  updateUserProfile = async ({ displayName, photoURL }: TCredentialsToUpdate) => {
    try {
      const auth = getAuth();

      if (!auth.currentUser) {
        return false;
      }

      await updateProfile(auth.currentUser, { displayName, photoURL });

      return true;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);

      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw new Error(updateProfileRequestMessages.error);
    }
  };

  updateUserEmail = async ({ email }: { email: TUser['email'] }) => {
    if (!email) return;

    const auth = getAuth();

    if (!auth.currentUser) {
      return false;
    }

    try {
      await updateEmail(auth.currentUser, email);

      return true;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);

      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw new Error(updateProfileRequestMessages.updateLoginError);
    }
  };

  deleteUserProfile = async () => {
    try {
      const auth = getAuth();

      if (!auth.currentUser) {
        return false;
      }

      await deleteUser(auth.currentUser);

      return true;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw new Error(defaultMessages.unexpectedError);
    }
  };

  createSavings = async (): Promise<boolean> => {
    try {
      const auth = getAuth();

      if (!auth.currentUser) {
        return false;
      }

      await setDoc(
        doc(db, ESlicesNames.userSavings, auth.currentUser.uid), {
          [ECollectionPaths.favorites]: [],
          [ECollectionPaths.cartValue]: [],
          [ECollectionPaths.purchases]: {},
        },
      );

      return true;
    } catch (err) {
      console.error(err);

      throw new Error(defaultMessages.unexpectedError);
    }
  };
}

export const userApi = new UserApi();

// export const createUser = async ({ email, password }: TAuthFormValues): Promise<TUser> => {
//   try {
//     const credentials = await createUserWithEmailAndPassword(appAuth, email, password);
//     const { uid, email: userEmail, displayName, phoneNumber, photoURL, isAnonymous } = credentials.user;
//
//     return {
//       userId: uid,
//       email: userEmail,
//       phoneNumber,
//       photoURL,
//       displayName,
//       isAnonymous,
//       isAdmin: adminsSet.has(userEmail ?? ''),
//       lastLoginAt: new Date().getTime(),
//     };
//   } catch (err) {
//     // eslint-disable-next-line no-console
//     console.error(err);
//     // eslint-disable-next-line @typescript-eslint/no-throw-literal
//     throw { message: registerRequestMessages.error };
//   }
// };
//
// export const loginUserByEmail = async ({ email, password }: TAuthFormValues): Promise<TUser> => {
//   try {
//     const credentials = await signInWithEmailAndPassword(appAuth, email, password);
//     const { uid, email: userEmail, displayName, phoneNumber, photoURL, isAnonymous } = credentials.user;
//
//     return {
//       userId: uid,
//       email: userEmail,
//       phoneNumber,
//       photoURL,
//       displayName,
//       isAnonymous,
//       isAdmin: adminsSet.has(userEmail ?? ''),
//       lastLoginAt: new Date().getTime(),
//     };
//   } catch (err) {
//     // eslint-disable-next-line no-console
//     console.error(err);
//     // eslint-disable-next-line @typescript-eslint/no-throw-literal
//     throw new Error(loginRequestMessages.error);
//   }
// };
//
// export const logout = async () => {
//   try {
//     await appAuth.signOut();
//   } catch (err) {
//     // eslint-disable-next-line no-console
//     console.error(err);
//     // eslint-disable-next-line @typescript-eslint/no-throw-literal
//     throw new Error(defaultMessages.unexpectedError);
//   }
// };
//
// export const loginAnonymously = async (): Promise<TUser> => {
//   try {
//     const anonymousUserCredentials = await signInAnonymously(appAuth);
//     const { uid, email: userEmail, displayName, phoneNumber, photoURL, isAnonymous } = anonymousUserCredentials.user;
//
//     return {
//       userId: uid,
//       email: userEmail,
//       phoneNumber,
//       photoURL,
//       displayName,
//       isAnonymous,
//       isAdmin: false,
//       lastLoginAt: new Date().getTime(),
//     };
//   } catch (err) {
//     // eslint-disable-next-line no-console
//     console.error(err);
//     throw err;
//   }
// };
//
// export const updateUserProfile = async ({ displayName, photoURL }: { displayName: TUser['displayName'], photoURL: TUser['photoURL'] }) => {
//   const auth = getAuth();
//
//   if (!auth.currentUser) return;
//
//   try {
//     return await updateProfile(auth.currentUser, { displayName, photoURL });
//   } catch (e) {
//     // eslint-disable-next-line no-console
//     console.error(e);
//
//     // eslint-disable-next-line @typescript-eslint/no-throw-literal
//     throw new Error(updateProfileRequestMessages.error);
//   }
// };
//
// export const updateUserEmail = async ({ email }: { email: TUser['email'] }) => {
//   if (!email) return;
//
//   const auth = getAuth();
//
//   if (!auth.currentUser) return;
//
//   try {
//     return await updateEmail(auth.currentUser, email);
//   } catch (e) {
//     // eslint-disable-next-line no-console
//     console.error(e);
//
//     // eslint-disable-next-line @typescript-eslint/no-throw-literal
//     throw new Error(updateProfileRequestMessages.updateLoginError);
//   }
// };
//
// export const deleteUserProfile = async () => {
//   try {
//     const auth = getAuth();
//
//     if (!auth.currentUser) return;
//
//     return await deleteUser(auth.currentUser);
//   } catch (err) {
//     // eslint-disable-next-line no-console
//     console.error(err);
//     // eslint-disable-next-line @typescript-eslint/no-throw-literal
//     throw new Error(defaultMessages.unexpectedError);
//   }
// };
