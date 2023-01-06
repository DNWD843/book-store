import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type TPopupProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  isOpened: boolean,
  onClose: () => void,
};
