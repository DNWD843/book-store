import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthForm } from '../../components/AuthForm';
import { authFormConfigs } from '../../components/AuthForm/constants';
import { Page } from '../../components/Page';
import { EAuthTypes, ECollectionPaths, EFetchStatuses } from '../../enums';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { authActions } from '../../redux/slices/authSlice';
import { userSavingsActions } from '../../redux/slices/userSavingsSlice';
import { selectUserSavings, storageActions } from '../../redux/store';
import { auth, getUserSavings, updateUserSavings } from '../../redux/thunks';
import { routes } from '../../routesMap';
import { TAuthFormValues, TBookInfo, TUser, TUserSavings } from '../../types';
import { storage, storageKeys } from '../../utils';

const LoginPageComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { clearAuthError } = authActions;
  // const loginError = useAppSelector(selectAuthError); // оставил для вывода в тултипе
  const { cartValue } = useAppSelector(selectUserSavings);
  const { setUserSavingsToStore } = userSavingsActions;

  const handleSubmit = async ({ email, password }: TAuthFormValues) => {
    dispatch(clearAuthError());
    await dispatch(auth.loginUser({ email, password }))
      .then(async (res) => {
        const userData = res.payload as TUser;

        await dispatch(getUserSavings(userData.userId))
          .then(async (savedData) => {
            if (cartValue.length) {
              const {
                favorites: savedFavorites = [],
                cartValue: savedCartValue = [],
                purchases: savedPurchases = {},
              } = savedData.payload as TUserSavings;

              const mergedCartValue = cartValue.reduce<TBookInfo[]>((acc, book) => {
                if (acc.some((savedBook) => savedBook.id === book.id)) {
                  return acc;
                }

                acc.push(book);
                return acc;
              }, [...savedCartValue]);

              const savings = { [ECollectionPaths.favorites]: [...savedFavorites],
                [ECollectionPaths.purchases]: { ...savedPurchases },
                [ECollectionPaths.cartValue]: [...mergedCartValue] };

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

  return (
    <Page title="">
      <AuthForm
        formConfig={authFormConfigs[EAuthTypes.login]}
        id={EAuthTypes.login}
        onSubmit={handleSubmit}
      />
    </Page>
  );
};

LoginPageComponent.displayName = 'LoginPageComponent';

export { LoginPageComponent as LoginPage };
