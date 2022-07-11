import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

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
