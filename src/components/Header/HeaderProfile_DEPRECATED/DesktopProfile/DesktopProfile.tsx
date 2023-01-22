import React, { forwardRef, memo } from 'react';

import { DesktopMenuButton } from '../../partials/DesktopMenuButton';

import { TDesktopProfileProps } from './DesktopProfile.props';

import styles from './DesktopProfile.module.css';

const DesktopProfile = forwardRef<HTMLDivElement, TDesktopProfileProps>(
  (props, ref) => (
    <div className={styles.profile}>
      <DesktopMenuButton />
    </div>
  ),
);

DesktopProfile.displayName = 'DesktopProfile';

const MemoDesktopProfile = memo(DesktopProfile);

export { MemoDesktopProfile as DesktopProfile };
