import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import { EPasswordLength } from '../../enums/passwordLength';

import { IAuthFormProps } from './AuthForm.props';

import styles from './AuthForm.module.css';

const AuthForm: React.FC<IAuthFormProps> = (
  {
    onSubmit,
    onClear,
    handleInputChange,
    formConfig: {
      formError = '',
      formTitle,
      emailError,
      emailValue,
      passwordError,
      passwordValue,
      isFormValid,
      submitButtonTitle,
      redirectText,
      redirectPath,
      redirectLinkTitle,
    },
  },
) => (
  <div className={styles.page}>
    <h2 className={styles.title}>{formTitle}</h2>
    <form noValidate className={styles.form} onSubmit={onSubmit}>
      <span className={styles.formError}>{formError}</span>
      <div className={styles.fieldset}>
        <label className={styles.label}>
          <span className={styles.inputLabel}>Email</span>
          <input
            required
            className={classNames(styles.input, { [styles.inputError]: emailError })}
            id="email"
            name="email"
            placeholder="Введите email"
            type="email"
            value={emailValue}
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
            id="password"
            maxLength={EPasswordLength.max}
            minLength={EPasswordLength.min}
            name="password"
            placeholder="Введите пароль"
            title={`Минимум ${EPasswordLength.min} знаков, максимум ${EPasswordLength.max} знаков`}
            type="password"
            value={passwordValue}
            onChange={handleInputChange}
          />
        </label>
        <span className={styles.error}>{passwordError}</span>
      </div>

      <div className={styles.buttons}>
        <button
          className={classNames('btn btn-success btn-lg', styles.submitButton)}
          disabled={!isFormValid}
          type="submit"
        >
          {submitButtonTitle}
        </button>
        <button
          className={classNames('btn btn-outline-secondary btn-lg', styles.cancelButton)}
          type="button"
          onClick={onClear}
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

AuthForm.displayName = 'AuthForm';

export { AuthForm };
