import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {
  getFirebase,
  actionTypes as rrfActionTypes,
} from 'react-redux-firebase';
import { constants as rfConstants } from 'redux-firestore';

import { TPopupsState, TUserSavings } from '../types';

import authReducer, { IAuthState } from './slices/authSlice';
import bookDetailsReducer, { TBookDetailsState } from './slices/bookDetailsSlice';
import booksReducer, { IBooksState } from './slices/booksSlice';
import popupsReducer from './slices/popupsSlice';
import userSavingsReducer from './slices/userSavingsSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    bookDetails: bookDetailsReducer,
    auth: authReducer,
    userSavings: userSavingsReducer,
    popups: popupsReducer,
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
export const selectFilteredCollection = (state: RootState): IBooksState['filteredCollection'] => state.books.filteredCollection;
export const selectBooksFetchingStatus = (state: RootState): IBooksState['status'] => state.books.status;
export const selectBookDetails = (state: RootState): TBookDetailsState => state.bookDetails;
// export const selectAuthError = (state: RootState): IAuthState['authError'] => state.auth.authError;
export const selectAuthStatus = (state: RootState): IAuthState['status'] => state.auth.status;
export const selectUserData = (state: RootState): IAuthState['userData'] => state.auth.userData;
export const selectUserSavings = (state: RootState): TUserSavings => state.userSavings;
export const selectUserPurchases = (state: RootState): TUserSavings['purchases'] => state.userSavings.purchases;
export const selectPopups = (state: RootState): TPopupsState => state.popups;

// service actions
const STORAGE_ACTION_PREFIX = 'STORAGE';
export const storageActions = {
  setSavings: { type: `${STORAGE_ACTION_PREFIX}/SET_USER_SAVINGS` },
  getSavings: { type: `${STORAGE_ACTION_PREFIX}/GET_USER_SAVINGS` },
  setBooks: { type: `${STORAGE_ACTION_PREFIX}/SET_BOOKS` },
  getBooks: { type: `${STORAGE_ACTION_PREFIX}/GET_BOOKS` },
  setUserInfo: { type: `${STORAGE_ACTION_PREFIX}/SET_USER_INFO` },
  getUserInfo: { type: `${STORAGE_ACTION_PREFIX}/GET_USER_INFO` },
  setBookDetails: { type: `${STORAGE_ACTION_PREFIX}/SET_BOOK_DETAILS` },
  getBookDetails: { type: `${STORAGE_ACTION_PREFIX}/GET_BOOK_DETAILS` },
  removeBookDetails: { type: `${STORAGE_ACTION_PREFIX}/REMOVE_BOOK_DETAILS` },
  removeUserInfo: { type: `${STORAGE_ACTION_PREFIX}/REMOVE_USER_INFO` },
  removeUserSavings: { type: `${STORAGE_ACTION_PREFIX}/REMOVE_USER_SAVINGS` },
  updateUserInfo: { type: `${STORAGE_ACTION_PREFIX}/UPDATE_USER_INFO` },
};
