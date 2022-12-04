import React from 'react';

import { ENavLinkIds } from '../../enums/navLinks';
import { HeaderNavLink } from '../HeaderNavLink';

import { THeaderNavLinksProps } from './HeaderNavLinks.props';
import { navLinksConfig } from './navLinksConfig';

import styles from './HeaderNavLinks.module.css';

const HeaderNavLinks: React.FC<THeaderNavLinksProps> = ({ isAnonymous }) => (
  <ul className={styles.navLinksList}>
    {navLinksConfig.map(({ id, children, ...props }) => (
      <HeaderNavLink key={String(id)} {...props} isVisible={id === ENavLinkIds.favorite ? !isAnonymous : true}>
        {children}
      </HeaderNavLink>
    ))}
  </ul>
);

HeaderNavLinks.displayName = 'NavLinks';

export { HeaderNavLinks };
