import { ChangeEvent, useCallback, useState } from 'react';

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

export const useAuthForm = () => {
  const [values, setValues] = useState<TFormState['values']>(initialFormState.values);
  const [errors, setErrors] = useState<TFormState['errors']>(initialFormState.errors);
  const [isValid, setIsValid] = useState<TFormState['isValid']>(initialFormState.isValid);

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

  return { values, errors, isValid, handleInputChange, setValues, resetForm };
};
