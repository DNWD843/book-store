import classNames from 'classnames';
import React, { memo } from 'react';

import styles from './ProfileShortInfo.module.css';

const ProfileShortInfo: React.FC<{ photoUrl: string, title: string }> = ({ photoUrl, title }) => (
  <div className={styles.container}>
    <img alt="аватар" className={styles.avatar} src={photoUrl} />
    <span className={classNames(styles.title)}>
      {title}
    </span>
  </div>
);

ProfileShortInfo.displayName = 'ProfileShortInfo';

const MemoProfileShortInfo = memo(ProfileShortInfo);

export { MemoProfileShortInfo as ProfileShortInfo };
