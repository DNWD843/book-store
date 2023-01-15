import React from 'react';
import { NavLink } from 'react-router-dom';

import { INavLinkIconProps } from './NavLinkIcon.props';

import styles from './NavLinkIcon.module.css';

const NavLinkIcon: React.FC<INavLinkIconProps> = (
  { to, children = null, isVisible = true, ...props },
) => (
  <li className={styles.navLink}>
    {isVisible && (
      <NavLink
        className={styles.icon}
        to={to}
        {...props}
      >
        {children}
      </NavLink>
    )}
  </li>
);

NavLinkIcon.displayName = 'NavLink';

export { NavLinkIcon };
