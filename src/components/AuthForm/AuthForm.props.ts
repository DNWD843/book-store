import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { EAuthTypes } from '../../enums';
import { TFormState } from '../../hooks/useAuthForm';

export interface IAuthFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  handleSubmit: (data: TFormState['values']) => void,
  authType: EAuthTypes
}
