import classNames from 'classnames';
import React from 'react';
import { Form, Field } from 'react-final-form';
import { Link } from 'react-router-dom';

import { EAuthFormFieldNames } from '../../enums/auth';
import { InputComponent } from '../Inputs';

import { TAuthFormProps } from './AuthForm.props';

import styles from './AuthForm.module.css';

const AuthForm: React.FC<TAuthFormProps> = (
  {
    id: formId,
    onSubmit,
    formConfig: {
      formTitle,
      submitButtonTitle,
      redirectText,
      redirectPath,
      redirectLinkTitle,
    },
  },
) => (
  <Form
    id={formId}
    onSubmit={onSubmit}
  >
    {({ handleSubmit, form, submitting, pristine }) => (
      <div className={styles.page}>
        <h3 className={styles.title}>{formTitle}</h3>
        <form noValidate className={styles.form} onSubmit={handleSubmit}>

          <Field id={`${formId}-${EAuthFormFieldNames.email}`} name={`${formId}-${EAuthFormFieldNames.email}`}>
            {(props) => (
              <InputComponent
                {...props}
                inputElementProps={{
                  id: EAuthFormFieldNames.email,
                  placeholder: 'Введите email',
                  type: 'email',
                }}
                label="Email"
              />
            )}
          </Field>

          <Field
            id={`${formId}-${EAuthFormFieldNames.password}`}
            name={`${formId}-${EAuthFormFieldNames.password}`}
            validate={(value) => (value?.length < 3 ? 'Length must be more than 3 digits' : '')}
          >
            {(props) => (
              <InputComponent
                {...props}
                inputElementProps={{
                  id: EAuthFormFieldNames.password,
                  placeholder: 'Введите пароль',
                  type: 'password',
                }}
                label="Password"
              />
            )}
          </Field>

          <div className={styles.buttons}>
            <button
              className={classNames('btn btn-success btn-lg', styles.submitButton)}
              disabled={submitting || pristine}
              type="submit"
            >
              {submitButtonTitle}
            </button>
            <button
              className={classNames('btn btn-outline-secondary btn-lg', styles.cancelButton)}
              disabled={submitting || pristine}
              type="button"
              onClick={() => { form.reset(); }}
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
    )}
  </Form>
);

AuthForm.displayName = 'AuthForm';

export { AuthForm };
