import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthForm } from '../../components/AuthForm';
import { Page } from '../../components/Page';
import { EAuthTypes, ECollectionPaths, EFetchStatuses } from '../../enums';
import { TFormState } from '../../hooks/useAuthForm';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { authActions } from '../../redux/slices/authSlice';
import { userSavingsActions } from '../../redux/slices/userSavingsSlice';
import { selectAuthError, selectUserSavings, storageActions } from '../../redux/store';
import { auth, getUserSavings, updateUserSavings } from '../../redux/thunks';
import { routes } from '../../routesMap';
import { TBookInfo, TUser, TUserSavings } from '../../types';
import { storage, storageKeys } from '../../utils';

const LoginPageComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { clearAuthError } = authActions;
  const loginError = useAppSelector(selectAuthError);
  const { cartValue } = useAppSelector(selectUserSavings);
  const { setUserSavingsToStore } = userSavingsActions;

  const handleSubmit = async ({ email, password }: TFormState['values']) => {
    dispatch(clearAuthError());
    await dispatch(auth.loginUser({ email, password }))
      .then(async (res) => {
        const userData = res.payload as TUser;

        await dispatch(getUserSavings(userData.userId))
          .then(async (savedData) => {
            if (cartValue.length) {
              const { favorites: savedFavorites = [], cartValue: savedCartValue = [] } = savedData.payload as TUserSavings;

              const filteredSavings = cartValue.reduce<TBookInfo[]>((acc, book) => {
                if (acc.some((savedBook) => savedBook.id === book.id)) {
                  return acc;
                }

                acc.push(book);
                return acc;
              }, [...savedCartValue]);

              const savings = { [ECollectionPaths.favorites]: [...savedFavorites],
                [ECollectionPaths.cartValue]: [...filteredSavings] };

              await dispatch(updateUserSavings({ userId: userData.userId, savings }))
                .then(() => { dispatch(setUserSavingsToStore(savings)); });
            }
          });

        return res;
      })
      .then((res) => {
        if (res.meta.requestStatus === EFetchStatuses.fulfilled) {
          navigate(routes.books);
        }

        dispatch(storageActions.setUserInfo);
        storage.setData(storageKeys.USER, res.payload);
      })
      .catch((err) => { console.error(err); });
  };

  const clearFormError = () => { dispatch(clearAuthError()); };

  return (
    <Page title="">
      <AuthForm
        authType={EAuthTypes.login}
        clearFormError={clearFormError}
        formError={loginError}
        handleSubmit={handleSubmit}
      />
    </Page>
  );
};

LoginPageComponent.displayName = 'LoginPageComponent';

export { LoginPageComponent as LoginPage };
