import { ReactNode } from 'react';

export type TMobileHeaderActionButtonProps = {
  isPressed: boolean,
  isTablet: boolean,
  action: () => void,
  tabletIcon: ReactNode,
  mobileIcon: ReactNode,
};
