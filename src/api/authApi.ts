import { createUserWithEmailAndPassword } from 'firebase/auth';

import { appAuth } from '../firebase';
import { TFormState } from '../hooks/useAuthForm';

export const createUser = async ({ email, password }: TFormState['values']) => {
  const credentials = await createUserWithEmailAndPassword(appAuth, email, password);
  console.log('user', credentials.user);
  return credentials.user;
};
