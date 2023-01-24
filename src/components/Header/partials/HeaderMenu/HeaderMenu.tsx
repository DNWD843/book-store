import classNames from 'classnames';
import React, { memo } from 'react';

import { DesktopMenuButton } from '../DesktopMenuButton';
import { HeaderMenuNavLinks } from '../HeaderMenuNavLinks';

import { THeaderMenuProps } from './HeaderMenu.props';
import { HeaderMenuActionButtons } from './HeaderMenuActionButtons';

import styles from './HeaderMenu.module.css';

const HeaderMenu: React.FC<THeaderMenuProps> = ({ isMenuOpened, isDesktop, isAnonymous, menuRef }) => (
  <div className={classNames(styles.menu, { [styles.isMenuVisible]: isMenuOpened })} ref={menuRef}>
    <div className={styles.menuHeader}>
      {!isDesktop ? (<DesktopMenuButton />) : null}
    </div>
    <HeaderMenuNavLinks />
    {isAnonymous ? null : (<HeaderMenuActionButtons />)}
  </div>
);

HeaderMenu.displayName = 'HeaderMenu';

const MemoHeaderMenu = memo(HeaderMenu);

export { MemoHeaderMenu as HeaderMenu };
