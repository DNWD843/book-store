import React from 'react';

import { AuthForm } from '../../components/AuthForm';
import { TFormState } from '../../hooks/useAuthForm';

const RegisterPage: React.FC = () => {
  const handleSubmit = (data: TFormState['values']) => {
    console.log(data);
  };

  return (
    <>
      <h2>Регистрация</h2>
      <AuthForm submitButtonTitle="Зарегистрироваться" onSubmit={handleSubmit} />
    </>
  );
};

RegisterPage.displayName = 'RegisterPage';

export { RegisterPage };
