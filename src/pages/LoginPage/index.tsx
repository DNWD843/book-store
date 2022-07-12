import React, { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { EFetchStatuses } from '../../enums';
import { TFormState } from '../../hooks/useAuthForm';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { authActions } from '../../redux/slices/authSlice';
import { selectAuthError } from '../../redux/store';
import { loginUser } from '../../redux/thunks';
import { routes } from '../../routesMap';

import { LoginPage } from './LoginPage';

const LoginPageComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { clearAuthError } = authActions;
  const loginError = useAppSelector(selectAuthError);

  const handleSubmit = ({ email, password }: TFormState['values']) => {
    dispatch(loginUser({ email, password }))
      .then((res) => {
        if (res.meta.requestStatus === EFetchStatuses.rejected) {
          // @ts-ignore
          throw res.error;
        }
        navigate(`../${routes.main}`);
      }).catch((err: any) => {
      // eslint-disable-next-line no-console
        console.error(err);
      });
  };

  useLayoutEffect(() => {
    dispatch(clearAuthError());
  }, [clearAuthError, dispatch]);

  return (<LoginPage handleSubmit={handleSubmit} loginError={loginError} />);
};

LoginPageComponent.displayName = 'LoginPageComponent';

export { LoginPageComponent as LoginPage };
