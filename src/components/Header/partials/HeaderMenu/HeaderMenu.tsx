import classNames from 'classnames';
import React, { memo } from 'react';

import { HeaderMenuNavLinks } from '../HeaderMenuNavLinks';
import { ProfileShortInfo } from '../ProfileShortInfo';

import { THeaderMenuProps } from './HeaderMenu.props';
import { HeaderMenuActionButtons } from './HeaderMenuActionButtons';

import styles from './HeaderMenu.module.css';

const HeaderMenu: React.FC<THeaderMenuProps> = ({ isMenuOpened, isShortInfoVisible, menuRef }) => (
  <div className={classNames(styles.menu, { [styles.isMenuVisible]: isMenuOpened })} ref={menuRef}>
    {isShortInfoVisible ? (<ProfileShortInfo />) : null}
    <HeaderMenuNavLinks />
    <HeaderMenuActionButtons />
  </div>
);

HeaderMenu.displayName = 'HeaderMenu';

const MemoHeaderMenu = memo(HeaderMenu);

export { MemoHeaderMenu as HeaderMenu };
