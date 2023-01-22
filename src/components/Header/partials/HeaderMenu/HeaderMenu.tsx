import classNames from 'classnames';
import React, { memo } from 'react';

import { SimpleButton } from '../../../../ui-components';
import { HeaderMenuNavLinks } from '../HeaderMenuNavLinks';
import { ProfileShortInfo } from '../ProfileShortInfo';

import styles from './HeaderMenu.module.css';

const HeaderMenu: React.FC = ({ isMenuOpened, isShortInfoVisible, onUpdateBooksCatalogue }) => (
  <div className={classNames(styles.menu, { [styles.isMenuOpened]: isMenuOpened })}>
    {isShortInfoVisible ? (<ProfileShortInfo />) : null}
    <HeaderMenuNavLinks />
    <div className={styles.buttons}>
      { isAdmin ? <SimpleButton className={classNames('btn-success', styles.button)} onClick={onUpdateBooksCatalogue}>Обновить каталог</SimpleButton> : null }
      <button className={classNames('btn btn-outline-secondary btn-sm', styles.button)} type="button" onClick={onLogout}>Выйти</button>
      <button className={classNames('btn btn-outline-danger btn-sm', styles.button)} type="button" onClick={onDelete}>Удалить аккаунт</button>
    </div>
  </div>
);

HeaderMenu.displayName = 'HeaderMenu';

const MemoHeaderMenu = memo(HeaderMenu);

export { MemoHeaderMenu as HeaderMenu };
