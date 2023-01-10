import { FormRenderProps } from 'react-final-form';

import { TProfileFormValues } from '../../types';

export interface IProfileFormComponentProps extends FormRenderProps<TProfileFormValues, Partial<TProfileFormValues>> {
}

export interface IProfileFormProps extends IProfileFormComponentProps {
  disabled: boolean,
  onCancel: () => void,
  onEdit: () => void,
}
