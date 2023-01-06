import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type TModalProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  isOpened: boolean,
  onClose: () => void,
};
