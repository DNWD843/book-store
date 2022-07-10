import React from 'react';

import { AuthForm } from '../../components/AuthForm';
import { EAuthTypes } from '../../enums';
import { TFormState } from '../../hooks/useAuthForm';

const LoginPage: React.FC<{ handleSubmit: (data: TFormState['values']) => void }> = ({ handleSubmit }) => (
  <AuthForm
    authType={EAuthTypes.login}
    handleSubmit={handleSubmit}
  />
);

LoginPage.displayName = 'LoginPage';

export { LoginPage };
