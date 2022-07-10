import React from 'react';

import { TFormState } from '../../hooks/useAuthForm';

import { LoginPage } from './LoginPage';

const LoginPageComponent: React.FC = () => {
  const handleSubmit = (data: TFormState['values']) => {
    console.log(data);
  };

  return (<LoginPage handleSubmit={handleSubmit} />);
};

LoginPageComponent.displayName = 'LoginPageComponent';

export { LoginPageComponent as LoginPage };
