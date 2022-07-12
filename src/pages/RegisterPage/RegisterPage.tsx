import React from 'react';

import { AuthForm } from '../../components/AuthForm';
import { EAuthTypes } from '../../enums';

import { TRegisterPageProps } from './RegisterPage.props';

const RegisterPage: React.FC<TRegisterPageProps> = ({ handleSubmit, registerError }) => (
  <AuthForm
    authType={EAuthTypes.register}
    formError={registerError}
    handleSubmit={handleSubmit}
  />
);

RegisterPage.displayName = 'RegisterPage';

export { RegisterPage };
