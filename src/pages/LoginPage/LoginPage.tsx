import React from 'react';

import { AuthForm } from '../../components/AuthForm';
import { EAuthTypes } from '../../enums';

import { TLoginPageProps } from './LoginPage.props';

const LoginPage: React.FC<TLoginPageProps> = ({ handleSubmit, loginError }) => (
  <AuthForm
    authType={EAuthTypes.login}
    formError={loginError}
    handleSubmit={handleSubmit}
  />
);

LoginPage.displayName = 'LoginPage';

export { LoginPage };
