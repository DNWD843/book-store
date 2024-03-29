import { createAsyncThunk } from '@reduxjs/toolkit';

import { buyBooks, createSavings, deleteSavings, fetchSavings, updateSavings } from '../../api';
import { TSendingOrderData, TUserSavings, TUserSavingsToUpdate } from '../../types';
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
  async (orderData: TSendingOrderData) => buyBooks(orderData),
);

export const deleteUserSavings = createAsyncThunk(
  `${ESlicesNames.userSavings}/deleteUserSavings`,
  async () => deleteSavings(),
);
