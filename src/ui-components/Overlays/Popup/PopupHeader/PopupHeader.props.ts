import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

type TPopupHeaderProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  onClose: () => void,
  closeButtonClassName?: string,
  headerClassName?: string,
  title?: string
};

export type TPopupHeaderPropsWithChildren = PropsWithChildren<TPopupHeaderProps>;
