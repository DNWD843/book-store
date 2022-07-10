import { TFormState } from '../../hooks/useAuthForm';

export type TAuthFormProps = {
  submitButtonTitle: string,
  onSubmit: (data: TFormState['values']) => void,
};
