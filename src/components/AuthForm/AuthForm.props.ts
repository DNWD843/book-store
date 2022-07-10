import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { TFormState } from '../../hooks/useAuthForm';

export interface IAuthFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  submitButtonTitle: string,
  handleSubmit: (data: TFormState['values']) => void,
}
