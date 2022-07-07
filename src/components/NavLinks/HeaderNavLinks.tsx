import React from 'react';

import { HeaderNavLink } from '../HeaderNavLink';

import { navLinksConfig } from './navLinksConfig';

import styles from './HeaderNavLinks.module.css';

const HeaderNavLinks: React.FC = () => (
  <ul className={styles.navLinksList}>
    {navLinksConfig.map(({ id, children, ...props }) => (
      <HeaderNavLink key={String(id)} {...props}>
        {children}
      </HeaderNavLink>
    ))}
  </ul>
);

HeaderNavLinks.displayName = 'NavLinks';

export { HeaderNavLinks };
