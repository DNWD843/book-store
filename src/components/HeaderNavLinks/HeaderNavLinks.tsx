import React from 'react';

import { EIconTypes } from '../../enums';
import { HeaderNavLink } from '../NavLinkIcon';

import { THeaderNavLinksProps } from './HeaderNavLinks.props';
import { navLinksConfig } from './navLinksConfig';

import styles from './HeaderNavLinks.module.css';

const HeaderNavLinks: React.FC<THeaderNavLinksProps> = ({ isAnonymous }) => (
  <ul className={styles.navLinksList}>
    {navLinksConfig.map(({ id, ...props }) => (
      <HeaderNavLink key={id} {...props} isVisible={id === EIconTypes.favorites ? !isAnonymous : true} />
    ))}
  </ul>
);

HeaderNavLinks.displayName = 'NavLinks';

export { HeaderNavLinks };
