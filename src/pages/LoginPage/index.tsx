import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthForm } from '../../components/AuthForm';
import { EAuthTypes, EFetchStatuses } from '../../enums';
import { TFormState } from '../../hooks/useAuthForm';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { authActions } from '../../redux/slices/authSlice';
import { selectAuthError } from '../../redux/store';
import { auth } from '../../redux/thunks';
import { routes } from '../../routesMap';

const LoginPageComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { clearAuthError } = authActions;
  const loginError = useAppSelector(selectAuthError);

  const handleSubmit = async ({ email, password }: TFormState['values']) => {
    dispatch(clearAuthError());
    await dispatch(auth.loginUser({ email, password }))
      .then((res) => {
        if (res.meta.requestStatus === EFetchStatuses.fulfilled) {
          navigate(routes.books);
        }
      });
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
