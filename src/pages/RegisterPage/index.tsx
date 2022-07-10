import React from 'react';

import { TFormState } from '../../hooks/useAuthForm';

import { RegisterPage } from './RegisterPage';

const RegisterPageComponent: React.FC = () => {
  const handleSubmit = (data: TFormState['values']) => {
    console.log(data);
  };

  return (<RegisterPage handleSubmit={handleSubmit} />);
};

RegisterPageComponent.displayName = 'RegisterPageComponent';

export { RegisterPageComponent as RegisterPage };
