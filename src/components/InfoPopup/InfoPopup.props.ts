import { PropsWithChildren } from 'react';

type TInfoPopupProps = {
  isOpened: boolean,
  onClose: () => void,
  title?: string,
};

export type TInfoPopupPropsWithChildren = PropsWithChildren<TInfoPopupProps>;
