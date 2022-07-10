import React from 'react';

import { AuthForm } from '../../components/AuthForm';
import { EAuthTypes } from '../../enums';
import { TFormState } from '../../hooks/useAuthForm';

const RegisterPage: React.FC<{ handleSubmit: (data: TFormState['values']) => void }> = ({ handleSubmit }) => (
  <AuthForm
    authType={EAuthTypes.register}
    handleSubmit={handleSubmit}
  />
);

RegisterPage.displayName = 'RegisterPage';

export { RegisterPage };
