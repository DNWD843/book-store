import classNames from 'classnames';
import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { EPasswordLength } from '../../enums/passwordLength';
import { useAuthForm } from '../../hooks/useAuthForm';

import { IAuthFormProps } from './AuthForm.props';

import styles from './AuthForm.module.css';

const AuthForm: React.FC<IAuthFormProps> = (
  {
    handleSubmit,
    authType,
    formError = '',
    ...props
  },
) => {
  const { values: { email, password }, errors: { email: emailError, password: passwordError }, handleInputChange, resetForm, formTitle,
    redirectLinkTitle, redirectText, redirectPath, submitButtonTitle, isValid } = useAuthForm(authType);

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    handleSubmit({ email, password });
  };

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>{formTitle}</h2>
      <form noValidate className={styles.form} onSubmit={onSubmit} {...props}>
        <span className={styles.formError}>{formError}</span>
        <div className={styles.fieldset}>
          <label className={styles.label}>
            <span className={styles.inputLabel}>Email</span>
            <input
              required
              className={classNames(styles.input, { [styles.inputError]: emailError })}
              id={`${authType}-email`}
              name="email"
              placeholder="Введите email"
              type="email"
              value={email}
              onChange={handleInputChange}
            />
          </label>
          <span className={styles.error}>{emailError}</span>
        </div>

        <div className={styles.fieldset}>
          <label className={styles.label}>
            <span className={styles.inputLabel}>Password</span>
            <input
              required
              className={classNames(styles.input, { [styles.inputError]: passwordError })}
              id={`${authType}-password`}
              maxLength={EPasswordLength.max}
              minLength={EPasswordLength.min}
              name="password"
              placeholder="Введите пароль"
              title={`Минимум ${EPasswordLength.min} знаков, максимум ${EPasswordLength.max} знаков`}
              type="password"
              value={password}
              onChange={handleInputChange}
            />
          </label>
          <span className={styles.error}>{passwordError}</span>
        </div>

        <div className={styles.buttons}>
          <button
            className={classNames('btn btn-success btn-lg', styles.submitButton)}
            disabled={!isValid}
            type="submit"
          >
            {submitButtonTitle}
          </button>
          <button
            className={classNames('btn btn-outline-secondary btn-lg', styles.cancelButton)}
            type="button"
            onClick={resetForm}
          >
            Очистить
          </button>
        </div>

      </form>
      <p className={styles.redirect}>
        {redirectText}
        {' '}
        <Link className={styles.redirectLink} to={redirectPath}>{redirectLinkTitle}</Link>
      </p>
    </div>

  );
};

AuthForm.displayName = 'AuthForm';

export { AuthForm };
