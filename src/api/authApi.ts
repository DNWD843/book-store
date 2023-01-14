import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, updateProfile, updateEmail, getAuth, deleteUser } from 'firebase/auth';

import {
  deleteUserRequestMessages,
  loginRequestMessages,
  registerRequestMessages,
  updateProfileRequestMessages,
} from '../constants';
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
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw { message: deleteUserRequestMessages.unexpectedError };
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

export const updateUserProfile = async ({ displayName, photoURL }: { displayName: TUser['displayName'], photoURL: TUser['photoURL'] }) => {
  const auth = getAuth();

  if (!auth.currentUser) return;

  try {
    return await updateProfile(auth.currentUser, { displayName, photoURL });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);

    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw { message: updateProfileRequestMessages.error };
  }
};

export const updateUserEmail = async ({ email }: { email: TUser['email'] }) => {
  if (!email) return;

  const auth = getAuth();

  if (!auth.currentUser) return;

  try {
    return await updateEmail(auth.currentUser, email);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);

    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw { message: updateProfileRequestMessages.updateLoginError };
  }
};

export const deleteUserProfile = async () => {
  try {
    const auth = getAuth();

    if (!auth.currentUser) return;

    return await deleteUser(auth.currentUser);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw { message: deleteUserRequestMessages.unexpectedError };
  }
};
