import { EAuthTypes } from '../../../enums';
import { TAuthFormValues } from '../../../types';

export type TFormConfig = {
  formTitle: string,
  submitButtonTitle: string,
  redirectText: string,
  redirectPath: string,
  redirectLinkTitle: string,
};

export type TAuthFormProps = {
  formConfig: TFormConfig,
  id: EAuthTypes,
  onSubmit: (data: TAuthFormValues) => void
};
