import { FormRenderProps } from 'react-final-form';

import { TOnEditArgs, TProfileFormValues } from '../../../types';

export interface IProfileFormComponentProps extends FormRenderProps<TProfileFormValues, Partial<TProfileFormValues>> {
}

export interface IProfileFormProps extends IProfileFormComponentProps {
  disabled: boolean,
  onEdit: (args: TOnEditArgs) => () => void,
}
