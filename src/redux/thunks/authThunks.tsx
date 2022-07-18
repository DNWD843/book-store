import { createAsyncThunk } from '@reduxjs/toolkit';

import { createUser, loginUserByEmail } from '../../api';
import { loginAnonymously, logout } from '../../api/authApi';
import { TFormState } from '../../hooks/useAuthForm';
import { deleteUserFromLS, keys, setUserToLS } from '../../utils';
import { EReducersNames } from '../reducersNames';

export const registerUser = createAsyncThunk(
  `${[EReducersNames.auth]}/registerUser`,
  async (data: TFormState['values']) => createUser(data),
);

export const loginUser = createAsyncThunk(
  `${[EReducersNames.auth]}/loginUser`,
  async (data: TFormState['values']) => {
    const user = await loginUserByEmail(data);

    setUserToLS(keys.USER_KEY, user);
    return user;
  },
);

export const logoutUser = createAsyncThunk(
  `${[EReducersNames.auth]}/logout`,
  async () => logout().then(() => { deleteUserFromLS(keys.USER_KEY); }),
);

export const loginUserAnonymously = createAsyncThunk(
  `${[EReducersNames.auth]}/loginUserAnonymously`,
  async () => {
    const user = await loginAnonymously();
    setUserToLS(keys.USER_KEY, user);
    return user;
  },
);
