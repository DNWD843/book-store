import React, { FormEvent } from 'react';

import { useAuthForm } from '../../hooks/useAuthForm';

import { TAuthFormProps } from './AuthForm.props';

import styles from './AuthForm.module.css';

const AuthForm: React.FC<TAuthFormProps> = ({ submitButtonTitle, onSubmit }) => {
  const { values: { email, password }, handleInputChange, resetForm } = useAuthForm();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form noValidate className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.fieldset}>
        <label className={styles.label}>
          <span className={styles.inputLabel}>Email</span>
          <input
            required
            className={styles.input}
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleInputChange}
          />
        </label>
        <span className={styles.emailError}>emailError</span>
      </div>

      <div>
        <label className={styles.label}>
          <span className={styles.inputLabel}>Password</span>
          <input
            required
            className={styles.input}
            id="password"
            maxLength={12}
            minLength={6}
            name="password"
            type="password"
            value={password}
            onChange={handleInputChange}
          />
        </label>
        <span className={styles.passwordError}>passwordError</span>
      </div>

      <button className={styles.submitButton} type="submit">{submitButtonTitle}</button>
      <button className={styles.cancelButton} type="button" onClick={resetForm}>Очистить</button>
    </form>
  );
};

AuthForm.displayName = 'AuthForm';

export { AuthForm };
