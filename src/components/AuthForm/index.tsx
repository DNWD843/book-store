import React, { FormEvent } from 'react';

import { useAuthForm } from '../../hooks/useAuthForm';

import { AuthForm } from './AuthForm';
import { IAuthFormComponentProps, TFormConfig } from './AuthForm.props';

const AuthFormComponent: React.FC<IAuthFormComponentProps> = ({ handleSubmit, clearFormError, authType, formError }) => {
  const {
    values: { email: emailValue, password: passwordValue },
    errors: { email: emailError, password: passwordError },
    handleInputChange,
    resetForm,
    formTitle,
    redirectLinkTitle,
    redirectText,
    redirectPath,
    submitButtonTitle,
    isFormValid,
  } = useAuthForm(authType);

  const formConfig: TFormConfig = {
    formError,
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
  };

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    handleSubmit({ email: emailValue, password: passwordValue });
  };

  const onClear = () => {
    resetForm();
    clearFormError();
  };

  return (
    <AuthForm
      formConfig={formConfig}
      handleInputChange={handleInputChange}
      onClear={onClear}
      onSubmit={onSubmit}
    />
  );
};

export { AuthFormComponent as AuthForm };
