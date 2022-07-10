import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { useAuthForm } from '../../hooks/useAuthForm';

import { IAuthFormProps } from './AuthForm.props';

import styles from './AuthForm.module.css';

const AuthForm: React.FC<IAuthFormProps> = (
  {
    handleSubmit,
    authType,
    ...props
  },
) => {
  const { values: { email, password }, handleInputChange, resetForm, formTitle,
    redirectLinkTitle, redirectText, redirectPath, submitButtonTitle } = useAuthForm(authType);

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    handleSubmit({ email, password });
  };

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>{formTitle}</h2>
      <form noValidate className={styles.form} onSubmit={onSubmit} {...props}>
        <div className={styles.fieldset}>
          <label className={styles.label}>
            <span className={styles.inputLabel}>Email</span>
            <input
              required
              className={styles.input}
              id={`${authType}-email`}
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
              id={`${authType}-password`}
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
      <p>
        {redirectText}
        {' '}
        <Link to={redirectPath}>{redirectLinkTitle}</Link>
      </p>
    </div>

  );
};

AuthForm.displayName = 'AuthForm';

export { AuthForm };
