import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthForm } from '../../components/AuthForm';
import { EAuthTypes, EFetchStatuses } from '../../enums';
import { TFormState } from '../../hooks/useAuthForm';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { authActions } from '../../redux/slices/authSlice';
import { selectAuthError } from '../../redux/store';
import { auth, createUserSavings } from '../../redux/thunks';
import { routes } from '../../routesMap';
import { TUser } from '../../types';

const RegisterPageComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { clearAuthError } = authActions;
  const registerError = useAppSelector(selectAuthError);

  const handleSubmit = ({ email, password }: TFormState['values']) => {
    dispatch(clearAuthError());
    dispatch(auth.registerUser({ email, password }))
      .then(async (res) => {
        const userData = res.payload as TUser;
        await dispatch(createUserSavings(userData.userId));

        return res;
      })
      .then((res) => {
        if (res.meta.requestStatus === EFetchStatuses.fulfilled) {
          navigate(routes.login);
        }
      })
      .catch((err) => { console.error(err); });
  };

  const clearFormError = () => { dispatch(clearAuthError()); };

  return (
    <AuthForm
      authType={EAuthTypes.register}
      clearFormError={clearFormError}
      formError={registerError}
      handleSubmit={handleSubmit}
    />
  );
};

RegisterPageComponent.displayName = 'RegisterPageComponent';

export { RegisterPageComponent as RegisterPage };
