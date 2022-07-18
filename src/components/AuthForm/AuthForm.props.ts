import { ChangeEvent, DetailedHTMLProps, FormEvent, HTMLAttributes } from 'react';

import { EAuthTypes } from '../../enums';
import { TFormState } from '../../hooks/useAuthForm';

export interface IAuthFormComponentProps extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  handleSubmit: (data: TFormState['values']) => void,
  authType: EAuthTypes,
  formError?: string,
  clearFormError: () => void,
}

export type TFormConfig = {
  formError?: string,
  formTitle: string,
  emailError: string,
  emailValue: string,
  passwordError: string
  passwordValue: string,
  isFormValid: boolean,
  submitButtonTitle: string,
  redirectText: string,
  redirectPath: string,
  redirectLinkTitle: string,
};

export interface IAuthFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  onSubmit: (evt: FormEvent<HTMLFormElement>) => void,
  onClear: () => void,
  handleInputChange: (evt: ChangeEvent<HTMLInputElement>) => void,
  formConfig: TFormConfig,
}
