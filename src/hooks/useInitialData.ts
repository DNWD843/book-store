import { EFetchStatuses } from '../enums';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { authActions, TUserData } from '../redux/slices/authSlice';
import { booksActions, TBooksCollection } from '../redux/slices/booksSlice';
import { selectBooks, selectUserData } from '../redux/store';
import { getBooks, auth } from '../redux/thunks';
import { keys, storage } from '../utils';

export const useInitialData = ({ authStatus, booksStatus }: { authStatus: EFetchStatuses, booksStatus: EFetchStatuses }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUserData);
  const books = useAppSelector(selectBooks);
  const { setUserToStore } = authActions;
  const { setBooksToStore } = booksActions;

  const savedRegisteredUser: TUserData = storage.getData(keys.REGISTERED_USER);
  const savedAnonymousUser: TUserData = storage.getData(keys.ANONYMOUS_USER);
  const savedBooks: TBooksCollection = storage.getData(keys.BOOKS);

  if (savedRegisteredUser && (!user || user?.isAnonymous) && authStatus === EFetchStatuses.fulfilled) {
    dispatch(setUserToStore(savedRegisteredUser));
  } else if (!savedAnonymousUser && authStatus === EFetchStatuses.fulfilled) {
    dispatch(auth.loginUserAnonymously());
  } else if (!user && authStatus === EFetchStatuses.fulfilled) {
    dispatch(setUserToStore(savedAnonymousUser));
  }

  if (!savedBooks && booksStatus === EFetchStatuses.fulfilled) {
    dispatch(getBooks());
  } else if (!books && booksStatus === EFetchStatuses.fulfilled) {
    dispatch(setBooksToStore(savedBooks));
  }
};
