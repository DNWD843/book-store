import { createAsyncThunk } from '@reduxjs/toolkit';

import { createUser, loginUserByEmail } from '../../api';
import { logout } from '../../api/authApi';
import { TFormState } from '../../hooks/useAuthForm';
import { EReducersNames } from '../reducersNames';

export const registerUser = createAsyncThunk(
  `${[EReducersNames.auth]}/registerUser`,
  async (data: TFormState['values']) => createUser(data),
);

export const loginUser = createAsyncThunk(
  `${[EReducersNames.auth]}/loginUser`,
  async (data: TFormState['values']) => loginUserByEmail(data),
);

export const logoutUser = createAsyncThunk(
  `${[EReducersNames.auth]}/logout`,
  async () => logout(),
);
