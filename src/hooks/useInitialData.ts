import { ONE_DAY_TIMESTAMP } from '../constants';
import { EFetchStatuses } from '../enums';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { authActions } from '../redux/slices/authSlice';
import { booksActions } from '../redux/slices/booksSlice';
import { selectBooksCollection, selectUserData, serviceActions } from '../redux/store';
import { getBooks } from '../redux/thunks';
import { IBooksCollection, TUserData } from '../types';
import { checkNeedToDataUpdate, storageKeys, storage } from '../utils';

export const useInitialData = ({ authStatus, booksStatus }: { authStatus: EFetchStatuses, booksStatus: EFetchStatuses }) => {
  const dispatch = useAppDispatch();
  const { setUserToStore } = authActions;
  const { setBooksToStore } = booksActions;
  const userInStore = useAppSelector(selectUserData);
  const booksCollectionInStore = useAppSelector(selectBooksCollection);

  if (booksStatus !== EFetchStatuses.fulfilled || authStatus !== EFetchStatuses.fulfilled) return;

  const savedUser = storage.getData<TUserData>(storageKeys.USER);
  dispatch(serviceActions.getUserInfo);
  const savedBooks = storage.getData<IBooksCollection>(storageKeys.BOOKS);
  dispatch(serviceActions.getBooks);

  if (savedUser && !userInStore) {
    dispatch(setUserToStore(savedUser));
  }
  // if (!savedUser && !userInStore) {
  //   dispatch(auth.loginUserAnonymously()).then((res) => {
  //     storage.setData(keys.USER, res.payload);
  //   });
  // } else if (savedUser && !savedUser.isAnonymous && checkNeedToDataUpdate({ date: savedUser.lastLoginAt, limit: ONE_DAY_TIMESTAMP })) {
  //   dispatch(auth.logoutUser());
  // } else if (savedUser && !userInStore) {
  //   dispatch(setUserToStore(savedUser));
  // }

  if (
    (!savedBooks && !booksCollectionInStore)
    || (savedBooks && (checkNeedToDataUpdate({ date: savedBooks.updatedAt!, limit: ONE_DAY_TIMESTAMP })))
  ) {
    dispatch(getBooks()).then((res) => {
      storage.setData(storageKeys.BOOKS, res.payload);
      dispatch(serviceActions.setBooks);
    })
      .catch((err) => { console.error(err); });
  } else if (savedBooks && !booksCollectionInStore) {
    dispatch(setBooksToStore(savedBooks));
  }
};
