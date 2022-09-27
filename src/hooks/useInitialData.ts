import { ONE_DAY_TIMESTAMP } from '../constants';
import { EFetchStatuses } from '../enums';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { authActions, TUserData } from '../redux/slices/authSlice';
import { booksActions, TBooksCollection } from '../redux/slices/booksSlice';
import { selectBooksCollection, selectUserData } from '../redux/store';
import { auth, getBooks } from '../redux/thunks';
import { checkNeedToDataUpdate, keys, storage } from '../utils';

export const useInitialData = ({ authStatus, booksStatus }: { authStatus: EFetchStatuses, booksStatus: EFetchStatuses }) => {
  const dispatch = useAppDispatch();
  const { setUserToStore } = authActions;
  const { setBooksToStore } = booksActions;
  const userInStore = useAppSelector(selectUserData);
  const booksCollectionInStore = useAppSelector(selectBooksCollection);

  if (booksStatus !== EFetchStatuses.fulfilled || authStatus !== EFetchStatuses.fulfilled) return;

  const savedUser = storage.getData<TUserData>(keys.USER);
  const savedBooks = storage.getData<TBooksCollection>(keys.BOOKS);

  if (!savedUser && !userInStore) {
    dispatch(auth.loginUserAnonymously()).then((res) => {
      storage.setData(keys.USER, res.payload);
    });
  } else if (savedUser && !savedUser.isAnonymous && checkNeedToDataUpdate({ date: savedUser.lastLoginAt, limit: ONE_DAY_TIMESTAMP })) {
    dispatch(auth.logoutUser());
  } else if (savedUser && !userInStore) {
    dispatch(setUserToStore(savedUser));
  }

  if (
    (!savedBooks && !booksCollectionInStore)
    || (savedBooks && (checkNeedToDataUpdate({ date: savedBooks.updatedAt, limit: ONE_DAY_TIMESTAMP })))
  ) {
    dispatch(getBooks()).then((res) => {
      storage.setData(keys.BOOKS, res.payload);
    });
  } else if (savedBooks && !booksCollectionInStore) {
    dispatch(setBooksToStore(savedBooks));
  }
};
