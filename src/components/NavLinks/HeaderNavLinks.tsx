import React from 'react';

import { HeaderNavLink } from '../HeaderNavLink';

import { navLinksConfig } from './navLinksConfig';

import styles from './HeaderNavLinks.module.css';

const HeaderNavLinks: React.FC = () => (
  <ul className={styles.navLinksList}>
    {navLinksConfig.map(({ id, to, title, children }) => (
      <HeaderNavLink key={String(id)} title={title} to={to}>
        {children}
      </HeaderNavLink>
    ))}
  </ul>
);

HeaderNavLinks.displayName = 'NavLinks';

export { HeaderNavLinks };
