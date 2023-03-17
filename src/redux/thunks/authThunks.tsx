import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  createUser,
  loginUserByEmail,
  loginAnonymously,
  logout,
  updateUserProfile,
  updateUserEmail,
  deleteUserProfile,
} from '../../api';
import { TAuthFormValues, TUser } from '../../types';
import { ECollectionsNames } from '../../enums/slicesNames';

export const registerUser = createAsyncThunk(
  `${[ECollectionsNames.auth]}/registerUser`,
  async (data: TAuthFormValues) => createUser(data),
);

export const loginUser = createAsyncThunk(
  `${[ECollectionsNames.auth]}/loginUser`,
  async (data: TAuthFormValues) => loginUserByEmail(data),
);

export const loginUserAnonymously = createAsyncThunk(
  `${[ECollectionsNames.auth]}/loginUserAnonymously`,
  async () => loginAnonymously(),
);

export const logoutUser = createAsyncThunk(
  `${[ECollectionsNames.auth]}/logout`,
  async () => logout(),
);

export const updateUserData = createAsyncThunk(
  `${[ECollectionsNames.auth]}/updateUserProfile`,
  async ({ displayName, photoURL }: { displayName: TUser['displayName'], photoURL: TUser['photoURL'] }) => updateUserProfile({ displayName, photoURL }),
);

export const updateUserLogin = createAsyncThunk(
  `${[ECollectionsNames.auth]}/updateUserEmail`,
  async ({ email }: { email: TUser['email'] }) => updateUserEmail({ email }),
);

export const deleteUser = createAsyncThunk(
  `${ECollectionsNames.auth}/deleteUser`,
  async () => deleteUserProfile(),
);
