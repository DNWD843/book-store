import { createAsyncThunk } from '@reduxjs/toolkit';

import { createUser } from '../../api/authApi';
import { TFormState } from '../../hooks/useAuthForm';
import { EReducersNames } from '../reducersNames';

export const registerUser = createAsyncThunk(
  `${[EReducersNames.auth]}/registerUser`,
  async (data: TFormState['values']) => createUser(data),
);
