import React, { memo } from 'react';

import { ANONYMOUS_USER_DEFAULT_AVATAR } from '../../../../constants';
import { useAppSelector } from '../../../../redux/hooks';
import { selectUserData } from '../../../../redux/store';
import avatar from '../../../../vendor/images/login_ava.png';

import { ProfileShortInfo } from './ProfileShortInfo';

const ProfileShortInfoComponent: React.FC = () => {
  const { isAnonymous, photoURL, email, displayName } = useAppSelector(selectUserData);

  const title = isAnonymous
    ? 'Гость'
    : `${displayName || email || 'Гость'}`;

  return (<ProfileShortInfo photoUrl={photoURL || ANONYMOUS_USER_DEFAULT_AVATAR || avatar} title={title} />);
};

ProfileShortInfoComponent.displayName = 'ProfileShortInfoComponent';

const MemoProfileShortInfoComponent = memo(ProfileShortInfoComponent);

export { MemoProfileShortInfoComponent as ProfileShortInfo };
