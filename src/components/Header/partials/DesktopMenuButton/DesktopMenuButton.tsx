import classNames from 'classnames';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../../../routesMap';
import { SimpleButton } from '../../../../ui-components';
import { ProfileShortInfo } from '../ProfileShortInfo';

import { TDesktopMenuButtonProps } from './DesktopMenuButton.props';

import styles from './DesktopMenuButton.module.css';

const DesktopMenuButton: React.FC<TDesktopMenuButtonProps> = ({ isAnonymous, disabled, onMenuButtonClick }) => (
  <div className={styles.menuButtonContainer}>
    {isAnonymous
      ? (
        <Link className={styles.loginLink} to={routes.login}>
          <ProfileShortInfo />
        </Link>
      )
      : (
        <SimpleButton className={classNames('btn-outline-secondary btn-sm', styles.menuButton)} disabled={disabled} onClick={onMenuButtonClick}>
          <ProfileShortInfo />
        </SimpleButton>
      )}
  </div>
);

DesktopMenuButton.displayName = 'DesktopMenuButton';

const MemoDesktopMenuButton = memo(DesktopMenuButton);

export { MemoDesktopMenuButton as DesktopMenuButton };
