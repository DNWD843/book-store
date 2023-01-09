import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IDateWidgetProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  date: string,
}
