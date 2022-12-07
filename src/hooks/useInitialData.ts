import { ONE_DAY_TIMESTAMP } from '../constants';
import { EFetchStatuses } from '../enums';
import { useAppDispatch } from '../redux/hooks';
import { authActions } from '../redux/slices/authSlice';
import { booksActions } from '../redux/slices/booksSlice';
import { serviceActions } from '../redux/store';
import { getBooks } from '../redux/thunks';
import { IBooksCollection, TUserData } from '../types';
import { checkNeedToDataUpdate, storageKeys, storage } from '../utils';

export const useInitialData = ({ authStatus, booksStatus }: { authStatus: EFetchStatuses, booksStatus: EFetchStatuses }) => {
  const dispatch = useAppDispatch();
  const { setUserToStore } = authActions;
  const { setBooksToStore } = booksActions;

  if (booksStatus !== EFetchStatuses.fulfilled || authStatus !== EFetchStatuses.fulfilled) return;

  dispatch(serviceActions.getUserInfo);
  const savedUser = storage.getData<TUserData>(storageKeys.USER);

  dispatch(serviceActions.getBooks);
  const savedBooks = storage.getData<IBooksCollection>(storageKeys.BOOKS);

  if (savedUser && !savedUser.isAnonymous) {
    dispatch(setUserToStore(savedUser));
  }

  if (!savedBooks) return;

  if (savedBooks.books && savedBooks.updatedAt && !checkNeedToDataUpdate({ date: savedBooks.updatedAt, limit: ONE_DAY_TIMESTAMP })) {
    dispatch(setBooksToStore(savedBooks));
  } else {
    dispatch(getBooks()).then((res) => {
      dispatch(serviceActions.setBooks);
      storage.setData(storageKeys.BOOKS, res.payload);
    })
      .catch((err) => { console.error(err); });
  }
};
