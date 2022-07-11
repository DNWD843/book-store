import React from 'react';
import { useNavigate } from 'react-router-dom';

import { EFetchStatuses } from '../../enums';
import { TFormState } from '../../hooks/useAuthForm';
import { useAppDispatch } from '../../redux/hooks';
import { loginUser } from '../../redux/thunks/authThunks';
import { routes } from '../../routesMap';

import { LoginPage } from './LoginPage';

const LoginPageComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  return (<LoginPage handleSubmit={handleSubmit} />);
};

LoginPageComponent.displayName = 'LoginPageComponent';

export { LoginPageComponent as LoginPage };
