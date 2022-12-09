import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthForm } from '../../components/AuthForm';
import { EAuthTypes, EFetchStatuses } from '../../enums';
import { TFormState } from '../../hooks/useAuthForm';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { authActions } from '../../redux/slices/authSlice';
import { selectAuthError, storageActions } from '../../redux/store';
import { auth, getUserSavings } from '../../redux/thunks';
import { routes } from '../../routesMap';
import { TUser } from '../../types';
import { storage, storageKeys } from '../../utils';

const LoginPageComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { clearAuthError } = authActions;
  const loginError = useAppSelector(selectAuthError);

  const handleSubmit = async ({ email, password }: TFormState['values']) => {
    dispatch(clearAuthError());
    await dispatch(auth.loginUser({ email, password }))
      .then(async (user) => {
        const userData = user.payload as TUser;
        await dispatch(getUserSavings(userData.userId));

        return user;
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
    <AuthForm
      authType={EAuthTypes.login}
      clearFormError={clearFormError}
      formError={loginError}
      handleSubmit={handleSubmit}
    />
  );
};

LoginPageComponent.displayName = 'LoginPageComponent';

export { LoginPageComponent as LoginPage };
