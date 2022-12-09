import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {
  getFirebase,
  actionTypes as rrfActionTypes,
} from 'react-redux-firebase';
import { constants as rfConstants } from 'redux-firestore';

import { TUserSavings } from '../types';

import authReducer, { IAuthState } from './slices/authSlice';
// import bookDetailsReducer from './slices/bookDetailsSlice';
import booksReducer, { IBooksState } from './slices/booksSlice';
import profileReducer, { IProfileState } from './slices/profileSlice';
import userSavingsReducer from './slices/userSavingsSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    // bookDetails: bookDetailsReducer,
    auth: authReducer,
    userSavings: userSavingsReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        // just ignore every redux-firebase and react-redux-firebase action type
        ...Object.keys(rfConstants.actionTypes).map(
          (type) => `${rfConstants.actionsPrefix}/${type}`,
        ),
        ...Object.keys(rrfActionTypes).map(
          (type) => `@@reactReduxFirebase/${type}`,
        ),
      ],
      ignoredPaths: ['firebase', 'firestore'],
    },
    thunk: {
      extraArgument: {
        getFirebase,
      },
    },
  }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;

export const selectBooksCollection = (state: RootState): IBooksState['books'] => state.books.books;
export const selectBooksFetchingStatus = (state: RootState): IBooksState['status'] => state.books.status;
export const selectFetchingDate = (state: RootState): IBooksState['updatedAt'] => state.books.updatedAt;
// export const getSelectedBooks = (state: RootState): TSelectedBooks => state.books.selectedBooks;
// export const selectActiveCardId = (state:RootState): IBooksState['activeCardId'] => state.books.activeCardId;
// export const selectBookDetailsFetchingStatus = (state: RootState): TBookDetailsState['status'] => state.bookDetails.status;
// export const selectBookDetails = (state: RootState): TBookDetailsState['book'] => state.bookDetails.book;
export const selectAuthError = (state: RootState): IAuthState['authError'] => state.auth.authError;
export const selectAuthStatus = (state: RootState): IAuthState['status'] => state.auth.status;
export const selectUserData = (state: RootState): IAuthState['userData'] => state.auth.userData;
export const selectProfileMenuState = (state: RootState): IProfileState['isMenuOpened'] => state.profile.isMenuOpened;
export const selectUserSavings = (state: RootState): TUserSavings => state.userSavings;

// service actions
const STORAGE_ACTION_PREFIX = 'storage';
export const storageActions = {
  setSavings: { type: `${STORAGE_ACTION_PREFIX}/setUserSavings` },
  getSavings: { type: `${STORAGE_ACTION_PREFIX}/getSavings` },
  setBooks: { type: `${STORAGE_ACTION_PREFIX}/setBooks` },
  getBooks: { type: `${STORAGE_ACTION_PREFIX}/getBooks` },
  setUserInfo: { type: `${STORAGE_ACTION_PREFIX}/setUserInfo` },
  getUserInfo: { type: `${STORAGE_ACTION_PREFIX}/getUserInfo` },
  removeUserData: { type: `${STORAGE_ACTION_PREFIX}/removeUserData` },
};
