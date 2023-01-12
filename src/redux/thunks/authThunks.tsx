import { createAsyncThunk } from '@reduxjs/toolkit';

import { createUser, loginUserByEmail, loginAnonymously, logout, updateUserProfile, updateUserEmail } from '../../api';
import { TAuthFormValues, TUser } from '../../types';
import { ESlicesNames } from '../slicesNames';

export const registerUser = createAsyncThunk(
  `${[ESlicesNames.auth]}/registerUser`,
  async (data: TAuthFormValues) => createUser(data),
);

export const loginUser = createAsyncThunk(
  `${[ESlicesNames.auth]}/loginUser`,
  async (data: TAuthFormValues) => loginUserByEmail(data),
);

export const loginUserAnonymously = createAsyncThunk(
  `${[ESlicesNames.auth]}/loginUserAnonymously`,
  async () => loginAnonymously(),
);

export const logoutUser = createAsyncThunk(
  `${[ESlicesNames.auth]}/logout`,
  async () => logout(),
);

export const updateUserData = createAsyncThunk(
  `${[ESlicesNames.auth]}/updateUserProfile`,
  async ({ displayName, photoURL }: { displayName: TUser['displayName'], photoURL: TUser['photoURL'] }) => updateUserProfile({ displayName, photoURL }),
);

export const updateUserLogin = createAsyncThunk(
  `${[ESlicesNames.auth]}/updateUserEmail`,
  async ({ email }: { email: TUser['email'] }) => updateUserEmail({ email }),
);
