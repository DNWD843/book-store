import { createAsyncThunk } from '@reduxjs/toolkit';

import { createUser, loginUserByEmail, loginAnonymously, logout } from '../../api';
import { TFormState } from '../../hooks/useAuthForm';
import { ESlicesNames } from '../slicesNames';

export const registerUser = createAsyncThunk(
  `${[ESlicesNames.auth]}/registerUser`,
  async (data: TFormState['values']) => createUser(data),
);

export const loginUser = createAsyncThunk(
  `${[ESlicesNames.auth]}/loginUser`,
  async (data: TFormState['values']) => loginUserByEmail(data),
);

export const loginUserAnonymously = createAsyncThunk(
  `${[ESlicesNames.auth]}/loginUserAnonymously`,
  async () => loginAnonymously(),
);

export const logoutUser = createAsyncThunk(
  `${[ESlicesNames.auth]}/logout`,
  async () => logout(),
);
