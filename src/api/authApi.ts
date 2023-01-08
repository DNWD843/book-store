import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously } from 'firebase/auth';

import { loginRequestMessages, registerRequestMessages } from '../constants';
import { appAuth } from '../firebase';
import { TAuthFormValues, TUser } from '../types';

export const createUser = async ({ email, password }: TAuthFormValues): Promise<TUser> => {
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
      isAdmin: false,
      lastLoginAt: new Date().getTime(),
    };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw { message: registerRequestMessages.error };
  }
};

export const loginUserByEmail = async ({ email, password }: TAuthFormValues): Promise<TUser> => {
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
      lastLoginAt: new Date().getTime(),
    };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw { message: loginRequestMessages.error };
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
      lastLoginAt: new Date().getTime(),
    };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    throw err;
  }
};
