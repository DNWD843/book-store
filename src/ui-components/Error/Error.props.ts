import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type TErrorProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & {
  error: string,
};
