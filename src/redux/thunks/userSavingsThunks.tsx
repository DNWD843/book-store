import { createAsyncThunk } from '@reduxjs/toolkit';

import { updateUserActions, setUserSavings, fetchUserSavings } from '../../api';
import { updateUserSavings } from '../../api/userSavingsApi';
import { TUserSavings, TUserSavingsToUpdate } from '../../types';
import { ESlicesNames } from '../slicesNames';

export const createUserSavings = createAsyncThunk(
  `${ESlicesNames.userSavings}/createUserSavings`,
  async (id: TUserSavings['id']) => setUserSavings(id!),
);

export const resetUserActions = createAsyncThunk(
  `${ESlicesNames.userSavings}/resetUserActions`,
  async (actions: TUserSavings) => updateUserActions(actions),
);

export const updateSavings = createAsyncThunk(
  `${ESlicesNames.userSavings}/updateSavings`,
  async ({ userId, savings }: TUserSavingsToUpdate) => updateUserSavings({ userId, savings }),
);

export const getUserSavings = createAsyncThunk(
  `${ESlicesNames.userSavings}/getUserSavings`,
  async (id: TUserSavings['id']) => fetchUserSavings(id!),
);
