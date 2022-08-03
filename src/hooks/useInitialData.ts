import { EFetchStatuses } from '../enums';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { authActions, TUserData } from '../redux/slices/authSlice';
import { booksActions, TBooksCollection } from '../redux/slices/booksSlice';
import { selectBooks, selectUserData } from '../redux/store';
import { auth, getBooks } from '../redux/thunks';
import { keys, storage } from '../utils';

export const useInitialData = ({ authStatus, booksStatus }: { authStatus: EFetchStatuses, booksStatus: EFetchStatuses }) => {
  const dispatch = useAppDispatch();
  const { setUserToStore } = authActions;
  const { setBooksToStore } = booksActions;
  const userInStore = useAppSelector(selectUserData);
  const booksInStore = useAppSelector(selectBooks);

  const savedUser = storage.getData<TUserData>(keys.USER);
  const savedBooks = storage.getData<TBooksCollection>(keys.BOOKS);

  if (savedUser && !userInStore) {
    dispatch(setUserToStore(savedUser));
  } else if (!userInStore && authStatus === EFetchStatuses.fulfilled) {
    dispatch(auth.loginUserAnonymously()).then((res) => {
      storage.setData(keys.USER, res.payload);
    });
  }

  if (savedBooks && !booksInStore) {
    dispatch(setBooksToStore(savedBooks));
  } else if (!booksInStore && booksStatus === EFetchStatuses.fulfilled) {
    dispatch(getBooks()).then((res) => {
      storage.setData(keys.BOOKS, res.payload);
    });
  }
};
