import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

export type TColProps = PropsWithChildren<PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>> & {
  size?: 1 | 2 | 3,
};
