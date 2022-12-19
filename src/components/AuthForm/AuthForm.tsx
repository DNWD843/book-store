import classNames from 'classnames';
import React from 'react';
import { Form, Field } from 'react-final-form';
import { Link } from 'react-router-dom';

import { EAuthFormFieldNames } from '../../enums/auth';
import { Input } from '../../ui-components/Inputs';

import { TAuthFormProps } from './AuthForm.props';
import { email, password } from './validators';

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
    {({ handleSubmit, form, submitting, pristine, invalid }) => (
      <div className={styles.page}>
        <h3 className={styles.title}>{formTitle}</h3>
        <form noValidate className={styles.form} onSubmit={handleSubmit}>

          <Field
            id={`${formId}-${EAuthFormFieldNames.email}`}
            initialValue=""
            name={EAuthFormFieldNames.email}
            validate={email}
            validateFields={[]}
          >
            {(props) => (
              <Input
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
            initialValue=""
            name={EAuthFormFieldNames.password}
            validate={password}
            validateFields={[]}
          >
            {(props) => (
              <Input
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
              disabled={invalid || pristine || submitting}
              type="submit"
            >
              {submitButtonTitle}
            </button>
            <button
              className={classNames('btn btn-outline-secondary btn-lg', styles.cancelButton)}
              disabled={pristine || submitting}
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
