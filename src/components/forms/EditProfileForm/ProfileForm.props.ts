import { FormRenderProps } from 'react-final-form';

import { TEditProfileFormValues } from '../../../types';

export interface IProfileFormComponentProps extends FormRenderProps<TEditProfileFormValues, Partial<TEditProfileFormValues>> {
}

export interface IProfileFormProps extends IProfileFormComponentProps {
  disabled: boolean,
}
