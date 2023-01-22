import React, { memo } from 'react';

import { EIconTypes } from '../../../../enums';
import { HeaderNavLink } from '../../../../ui-components';

import { THeaderNavLinksProps } from './HeaderNavLinks.props';

import styles from './HeaderNavLinks.module.css';

const HeaderNavLinks: React.FC<THeaderNavLinksProps> = ({ isAnonymous, navLinks }) => (
  <nav className={styles.navLinksList}>
    {navLinks.map(({ id, ...props }) => (
      <HeaderNavLink key={id} {...props} isVisible={id === EIconTypes.favorites ? !isAnonymous : true} />
    ))}
  </nav>
);

HeaderNavLinks.displayName = 'NavLinks';

const MemoHeaderNavLinks = memo(HeaderNavLinks);

export { MemoHeaderNavLinks as HeaderNavLinks };
