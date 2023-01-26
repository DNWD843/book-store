import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { THeaderMenuLinksConfig } from './configs';

import styles from './HeaderMenuNavLinks.module.css';

const HeaderMenuNavLinks: React.FC<{ navLinksConfig: THeaderMenuLinksConfig, closeMenu: () => void }> = ({ navLinksConfig, closeMenu }) => (
  <nav className={styles.navLinks}>
    {navLinksConfig.map(({ route, title }) => (
      <li>
        <Link className={styles.link} to={route} onClick={closeMenu}>{title}</Link>
      </li>
    ))}
  </nav>
);

HeaderMenuNavLinks.displayName = 'HeaderMenuNavLinks';

const MemoHeaderMenuNavLinks = memo(HeaderMenuNavLinks);

export { MemoHeaderMenuNavLinks as HeaderMenuNavLinks };
