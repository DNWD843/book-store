import React from 'react';
import { useNavigate } from 'react-router-dom';

import { TFormState } from '../../hooks/useAuthForm';
import { useAppDispatch } from '../../redux/hooks';
import { registerUser } from '../../redux/thunks';
import { routes } from '../../routesMap';

import { RegisterPage } from './RegisterPage';

const RegisterPageComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (data: TFormState['values']) => {
    dispatch(registerUser(data))
      .then(() => {
        navigate(`../${routes.login}`);
      });
  };

  return (<RegisterPage handleSubmit={handleSubmit} />);
};

RegisterPageComponent.displayName = 'RegisterPageComponent';

export { RegisterPageComponent as RegisterPage };
