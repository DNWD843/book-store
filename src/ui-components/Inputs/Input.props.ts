import { FieldRenderProps } from 'react-final-form';

import { TInputElementProps } from '../../types';

export interface IInputComponentProps extends FieldRenderProps<string> {
  label: string,
  inputElementProps: TInputElementProps,
}

export type TInputProps = {
  label: string,
  error?: string,
  inputElementProps: TInputElementProps,
};
