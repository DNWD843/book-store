import { createUserWithEmailAndPassword } from 'firebase/auth';

import { appAuth } from '../firebase';
import { TFormState } from '../hooks/useAuthForm';

export const createUser = async ({ email, password }: TFormState['values']) => {
  try {
    const credentials = await createUserWithEmailAndPassword(appAuth, email, password);
    return credentials.user;
  } catch (e: any) {
    throw new Error(`Error ${e.code}: ${e.message}`);
  }
};
