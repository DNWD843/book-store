import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously } from 'firebase/auth';

import { appAuth } from '../firebase';
import { TFormState } from '../hooks/useAuthForm';
import { TUser } from '../types';

export const createUser = async ({ email, password }: TFormState['values']) => {
  const credentials = await createUserWithEmailAndPassword(appAuth, email, password);
  return credentials.user;
};

export const loginUserByEmail = async ({ email, password }: TFormState['values']): Promise<TUser> => {
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
};

export const logout = async () => {
  await appAuth.signOut();
};

export const loginAnonymously = async (): Promise<TUser> => {
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
};
