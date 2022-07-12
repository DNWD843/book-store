import { TFormState } from '../../hooks/useAuthForm';

export type TLoginPageProps = {
  handleSubmit: (data: TFormState['values']) => void,
  loginError?: string,
};
