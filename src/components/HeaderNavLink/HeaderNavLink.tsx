import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { ENavLinkTypes } from '../../enums';

import { IHeaderNavLinkProps } from './HeaderNavLink.props';

import styles from './HeaderNavLink.module.css';

const HeaderNavLink: React.FC<IHeaderNavLinkProps> = (
  { to, children = '', linkType = ENavLinkTypes.default, isVisible = true, ...props },
) => (
  <li className={styles.navLink}>
    {isVisible && (
      <NavLink
        className={classNames({
          [styles.icon]: linkType === ENavLinkTypes.icon,
        })}
        to={to}
        {...props}
      >
        {children}
      </NavLink>
    )}
  </li>
);

HeaderNavLink.displayName = 'NavLink';

export { HeaderNavLink };
