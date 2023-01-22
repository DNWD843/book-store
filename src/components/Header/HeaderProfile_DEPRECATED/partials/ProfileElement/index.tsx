import classNames from 'classnames';
import React, { memo } from 'react';

import { SimpleButton } from '../../../../../ui-components';

import { TProfileElementProps } from '../../../partials/DesktopMenuButton/DesktopMenuButton.props';

import styles from '../../../partials/DesktopMenuButton/DesktopMenuButton.module.css';

const ProfileElement: React.FC<TProfileElementProps> = ({ className, title, avatarUrl, profileButtonRef, onProfileClick }) => (
  <div>
    <img alt="аватар пользователя" className={styles.avatar} src={avatarUrl} />
    <SimpleButton
      className={classNames('btn-outline-secondary btn-sm', className)}
      // profileButtonRef={profileButtonRef}
      onClick={onProfileClick}
    >
      {title}
    </SimpleButton>
  </div>

);

ProfileElement.displayName = 'ProfileElement';

const MemoProfileElement = memo(ProfileElement);

export { MemoProfileElement as ProfileElement };
