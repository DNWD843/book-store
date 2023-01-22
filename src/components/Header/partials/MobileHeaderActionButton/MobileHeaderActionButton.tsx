import classNames from 'classnames';
import React, { memo } from 'react';

import { SimpleButton } from '../../../../ui-components';
import { closeIconMobile, closeIconTablet } from '../../../../vendor/icons';

import { TMobileHeaderActionButtonProps } from './MobileHeaderActionButton.props';

import styles from './MobileHeaderActionButton.module.css';

const MobileHeaderActionButton: React.FC<TMobileHeaderActionButtonProps> = ({ isPressed, isTablet, action, tabletIcon, mobileIcon }) => (
  <>
    {isPressed
      ? (<SimpleButton className={classNames(styles.actionButton, 'btn-outline-secondary')}>{isTablet ? closeIconTablet : closeIconMobile}</SimpleButton>)
      : (<SimpleButton className={classNames(styles.actionButton, 'btn-outline-secondary')} onClick={action}>{isTablet ? tabletIcon : mobileIcon}</SimpleButton>)}
  </>
);

MobileHeaderActionButton.displayName = 'MobileHeaderActionButton';

const MemoMobileHeaderActionButton = memo(MobileHeaderActionButton);

export { MemoMobileHeaderActionButton as MobileHeaderActionButton };
