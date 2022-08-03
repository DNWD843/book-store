import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously } from 'firebase/auth';

import { appAuth } from '../firebase';
import { TFormState } from '../hooks/useAuthForm';
import { TUser } from '../types';

export const createUser = async ({ email, password }: TFormState['values']) => {
  try {
    const credentials = await createUserWithEmailAndPassword(appAuth, email, password);
    return credentials.user;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    throw err;
  }
};

export const loginUserByEmail = async ({ email, password }: TFormState['values']): Promise<TUser> => {
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
      isAdmin: false,
    };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    throw err;
  }
};

export const logout = async () => {
  try {
    await appAuth.signOut();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    throw err;
  }
};

export const loginAnonymously = async (): Promise<TUser> => {
  try {
    const anonymousUserCredentials = await signInAnonymously(appAuth);
    const { uid, email: userEmail, displayName, phoneNumber, photoURL, isAnonymous } = anonymousUserCredentials.user;

    return {
      userId: uid,
      email: userEmail,
      phoneNumber,
      photoURL,
      displayName,
      isAnonymous,
      isAdmin: false,
    };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    throw err;
  }
};
