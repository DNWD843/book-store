import React from 'react';
import { Link } from 'react-router-dom';

import { AuthForm } from '../../components/AuthForm';
import { TFormState } from '../../hooks/useAuthForm';
import { routes } from '../../routesMap';

import styles from './RegisterPage.module.css';

const RegisterPage: React.FC = () => {
  const handleSubmit = (data: TFormState['values']) => {
    console.log(data);
  };

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Регистрация</h2>
      <AuthForm handleSubmit={handleSubmit} submitButtonTitle="Зарегистрироваться" />
      <p>
        Если у Вас уже есть аккаунт, Вы можете
        {' '}
        <Link to={`../${routes.login}`}>Войти</Link>
      </p>
    </div>
  );
};

RegisterPage.displayName = 'RegisterPage';

export { RegisterPage };
