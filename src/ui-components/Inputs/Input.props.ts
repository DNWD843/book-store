import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { FieldRenderProps } from 'react-final-form';

export type TInputElementProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export interface IInputComponentProps extends FieldRenderProps<string> {
  label: string,
  inputElementProps: TInputElementProps,
}

export type TInputProps = {
  label: string,
  error: string,
  inputElementProps: TInputElementProps,
};
