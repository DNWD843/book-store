import { TFormState } from '../../hooks/useAuthForm';

export type TRegisterPageProps = {
  handleSubmit: (data: TFormState['values']) => void,
  registerError?: string,
};
