import { createAsyncThunk } from '@reduxjs/toolkit';

import { createUser, loginUserByEmail } from '../../api';
import { loginAnonymously, logout } from '../../api/authApi';
import { TFormState } from '../../hooks/useAuthForm';
import { storage, keys } from '../../utils';
import { EReducersNames } from '../reducersNames';

export const registerUser = createAsyncThunk(
  `${[EReducersNames.auth]}/registerUser`,
  async (data: TFormState['values']) => createUser(data),
);

export const loginUser = createAsyncThunk(
  `${[EReducersNames.auth]}/loginUser`,
  async (data: TFormState['values']) => {
    const user = await loginUserByEmail(data);

    storage.setData(keys.USER, user);
    return user;
  },
);

export const logoutUser = createAsyncThunk(
  `${[EReducersNames.auth]}/logout`,
  async () => logout().then(() => { storage.deleteData(keys.USER); }),
);

export const loginUserAnonymously = createAsyncThunk(
  `${[EReducersNames.auth]}/loginUserAnonymously`,
  async () => {
    const user = await loginAnonymously();
    storage.setData(keys.USER, user);
    return user;
  },
);
