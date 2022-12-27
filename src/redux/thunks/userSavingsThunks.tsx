import { createAsyncThunk } from '@reduxjs/toolkit';

import { buyBooks, createSavings, fetchSavings } from '../../api';
import { updateSavings } from '../../api/userSavingsApi';
import { TUserSavings, TUserSavingsToUpdate } from '../../types';
import { ESlicesNames } from '../slicesNames';

export const createUserSavings = createAsyncThunk(
  `${ESlicesNames.userSavings}/createUserSavings`,
  async (id: TUserSavings['id']) => createSavings(id!),
);

export const updateUserSavings = createAsyncThunk(
  `${ESlicesNames.userSavings}/updateSavings`,
  async ({ userId, savings }: TUserSavingsToUpdate) => updateSavings({ userId, savings }),
);

export const getUserSavings = createAsyncThunk(
  `${ESlicesNames.userSavings}/getUserSavings`,
  async (id: TUserSavings['id']) => fetchSavings(id!),
);

export const sendOrderData = createAsyncThunk(
  `${ESlicesNames.userSavings}/sendOrderData`,
  async (orderData: any) => buyBooks(orderData),
);
