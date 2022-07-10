import { ChangeEvent, useCallback, useState } from 'react';

import { EAuthTypes } from '../enums';
import { routes } from '../routesMap';

export type TFormState = {
  values: {
    email: string,
    password: string,
  },
  errors: {
    email: string,
    password: string,
  },
  isValid: boolean,
};

const initialFormState: TFormState = {
  values: {
    email: '',
    password: '',
  },
  errors: {
    email: '',
    password: '',
  },
  isValid: false,
};

const authConfig: Record<EAuthTypes, Record<string, string>> = {
  [EAuthTypes.register]: {
    formTitle: 'Регистрация',
    redirectLinkTitle: 'Войти',
    redirectPath: `../${routes.login}`,
    redirectText: 'Уже есть аккаунт?',
    submitButtonTitle: 'Зарегистрироваться',
  },
  [EAuthTypes.login]: {
    formTitle: 'Авторизация',
    redirectLinkTitle: 'Зарегистрироваться',
    redirectPath: `../${routes.register}`,
    redirectText: 'Еще нет аккаунта?',
    submitButtonTitle: 'Войти',
  },
};

export const useAuthForm = (authType: EAuthTypes) => {
  const [values, setValues] = useState<TFormState['values']>(initialFormState.values);
  const [errors, setErrors] = useState<TFormState['errors']>(initialFormState.errors);
  const [isValid, setIsValid] = useState<TFormState['isValid']>(initialFormState.isValid);

  const { formTitle, redirectLinkTitle, redirectText, redirectPath, submitButtonTitle } = authConfig[authType];

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: event.target.validationMessage });
    setIsValid(event.target?.closest('form')?.checkValidity() || false);
  };

  const resetForm = useCallback(() => {
    setValues(initialFormState.values);
    setErrors(initialFormState.errors);
    setIsValid(initialFormState.isValid);
  },
  [setValues, setErrors, setIsValid]);

  return { values,
    errors,
    isValid,
    handleInputChange,
    setValues,
    resetForm,
    formTitle,
    redirectLinkTitle,
    redirectText,
    redirectPath,
    submitButtonTitle };
};
