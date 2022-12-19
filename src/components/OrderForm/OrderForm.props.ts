import { TOrderFormValues } from '../../types';

export type TOrderFormProps = {
  onSubmit: (data: TOrderFormValues) => void,
  formTitle?: string,
};
