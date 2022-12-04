import { NavLinkProps } from 'react-router-dom';

import { ENavLinkTypes } from '../../enums';

export interface IHeaderNavLinkProps extends NavLinkProps {
  linkType: ENavLinkTypes,
  isVisible?: boolean,
}
