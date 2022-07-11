import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { appAuth } from '../firebase';
import { TFormState } from '../hooks/useAuthForm';

export const createUser = async ({ email, password }: TFormState['values']) => {
  try {
    const credentials = await createUserWithEmailAndPassword(appAuth, email, password);
    return credentials.user;
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
};

export const loginUserByEmail = async ({ email, password }: TFormState['values']) => {
  try {
    const credentials = await signInWithEmailAndPassword(appAuth, email, password);
    return credentials.user;
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
};
