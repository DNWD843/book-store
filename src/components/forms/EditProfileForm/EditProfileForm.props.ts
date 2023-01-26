import { FormRenderProps } from 'react-final-form';

import { TOnEditArgs, TEditProfileFormValues, IFieldConfig } from '../../../types';

export interface IEditProfileFormComponentProps extends FormRenderProps<TEditProfileFormValues, Partial<TEditProfileFormValues>> {
}

export interface IEditProfileFormProps extends IEditProfileFormComponentProps {
  disabled: boolean,
  onEdit: (args: TOnEditArgs) => () => void,
  formFieldsConfig: IFieldConfig[],
}
