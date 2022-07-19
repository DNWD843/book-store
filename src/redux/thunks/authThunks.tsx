import { createAsyncThunk } from '@reduxjs/toolkit';

import { createUser, loginUserByEmail } from '../../api';
import { loginAnonymously, logout } from '../../api/authApi';
import { TFormState } from '../../hooks/useAuthForm';
import { storage, keys } from '../../utils';
import { ESlicesNames } from '../slicesNames';

export const registerUser = createAsyncThunk(
  `${[ESlicesNames.auth]}/registerUser`,
  async (data: TFormState['values']) => createUser(data),
);

export const loginUser = createAsyncThunk(
  `${[ESlicesNames.auth]}/loginUser`,
  async (data: TFormState['values']) => {
    const user = await loginUserByEmail(data);

    storage.setData(keys.REGISTERED_USER, user);
    return user;
  },
);

export const logoutUser = createAsyncThunk(
  `${[ESlicesNames.auth]}/logout`,
  async () => logout().then(() => { storage.deleteData(keys.REGISTERED_USER); }),
);

export const loginUserAnonymously = createAsyncThunk(
  `${[ESlicesNames.auth]}/loginUserAnonymously`,
  async () => {
    const user = await loginAnonymously();
    storage.setData(keys.ANONYMOUS_USER, user);
    return user;
  },
);
