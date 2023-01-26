import { ReactNode } from 'react';
import { NavLinkProps } from 'react-router-dom';

import { EIconTypes } from '../../enums';

export interface INavLinkIconProps extends NavLinkProps {
  isVisible: boolean,
  title: string,
  to: string,
}

export interface IHeaderNavLinkProps extends INavLinkIconProps {
  isVisible: boolean,
  to: string,
  icon: ReactNode,
  iconActive: ReactNode,
  type: EIconTypes,
  title: string,
}

export type THeaderNavLinksConfig = Array<Omit<IHeaderNavLinkProps, 'isVisible'>>;
