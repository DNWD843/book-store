import { createAsyncThunk } from '@reduxjs/toolkit';

import { buyBooks, createSavings, deleteSavings, fetchSavings, updateSavings } from '../../api';
import { TSendingOrderData, TUserSavings, TUserSavingsToUpdate } from '../../types';
import { ECollectionsNames } from '../../enums/slicesNames';

export const createUserSavings = createAsyncThunk(
  `${ECollectionsNames.userSavings}/createUserSavings`,
  async (id: TUserSavings['id']) => createSavings(id!),
);

export const updateUserSavings = createAsyncThunk(
  `${ECollectionsNames.userSavings}/updateSavings`,
  async ({ userId, savings }: TUserSavingsToUpdate) => updateSavings({ userId, savings }),
);

export const getUserSavings = createAsyncThunk(
  `${ECollectionsNames.userSavings}/getUserSavings`,
  async (id: TUserSavings['id']) => fetchSavings(id!),
);

export const sendOrderData = createAsyncThunk(
  `${ECollectionsNames.userSavings}/sendOrderData`,
  async (orderData: TSendingOrderData) => buyBooks(orderData),
);

export const deleteUserSavings = createAsyncThunk(
  `${ECollectionsNames.userSavings}/deleteUserSavings`,
  async () => deleteSavings(),
);
