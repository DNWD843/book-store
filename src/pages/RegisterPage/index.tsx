import React from 'react';
import { useNavigate } from 'react-router-dom';

import { EFetchStatuses } from '../../enums';
import { TFormState } from '../../hooks/useAuthForm';
import { useAppDispatch } from '../../redux/hooks';
import { registerUser } from '../../redux/thunks';
import { routes } from '../../routesMap';

import { RegisterPage } from './RegisterPage';

const RegisterPageComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = ({ email, password }: TFormState['values']) => {
    dispatch(registerUser({ email, password }))
      .then((res) => {
        if (res.meta.requestStatus === EFetchStatuses.rejected) {
          // @ts-ignore
          throw res.error;
        }
        navigate(`../${routes.login}`);
      })
      .catch((err: any) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  };

  return (<RegisterPage handleSubmit={handleSubmit} />);
};

RegisterPageComponent.displayName = 'RegisterPageComponent';

export { RegisterPageComponent as RegisterPage };
