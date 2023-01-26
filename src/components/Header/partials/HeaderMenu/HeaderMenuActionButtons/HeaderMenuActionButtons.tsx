import classNames from 'classnames';
import React, { memo } from 'react';

import { SimpleButton } from '../../../../../ui-components';

import { THeaderMenuActionButtonsProps } from './HeaderMenuActionButtons.props';

import styles from './HeaderMenuActionButtons.module.css';

const HeaderMenuActionButtons: React.FC<THeaderMenuActionButtonsProps> = ({ isAdmin, onUpdateBooksCatalogue, onLogout, onDelete }) => (
  <div className={styles.buttons}>
    { isAdmin ? <SimpleButton className={classNames('btn-success', styles.button)} key="updateCatalogue" onClick={onUpdateBooksCatalogue}>Обновить каталог</SimpleButton> : null }
    <SimpleButton className={classNames('btn-outline-secondary btn-sm', styles.button)} key="logout" onClick={onLogout}>Выйти</SimpleButton>
    <SimpleButton className={classNames('btn-outline-danger btn-sm', styles.button)} key="delete" onClick={onDelete}>Удалить аккаунт</SimpleButton>
  </div>
);

HeaderMenuActionButtons.displayName = 'HeaderMenuActionButtons';

const MemoHeaderMenuActionButtons = memo(HeaderMenuActionButtons);

export { MemoHeaderMenuActionButtons as HeaderMenuActionButtons };
