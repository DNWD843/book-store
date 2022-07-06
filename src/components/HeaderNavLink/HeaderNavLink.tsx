import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../NavLinks/HeaderNavLinks.module.css';

import { IHeaderNavLinkProps } from './HeaderNavLink.props';

const HeaderNavLink: React.FC<IHeaderNavLinkProps> = ({ to, children = '', className = '', ...props }) => (
  <li>
    <NavLink className={classNames(styles.navLink, className)} to={to} {...props}>{children}</NavLink>
  </li>
);

HeaderNavLink.displayName = 'NavLink';

export { HeaderNavLink };
