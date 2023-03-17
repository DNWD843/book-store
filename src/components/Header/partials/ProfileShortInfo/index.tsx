import { observer } from 'mobx-react-lite';
import React from 'react';

import { ANONYMOUS_USER_DEFAULT_AVATAR } from '../../../../constants';
import { userStore } from '../../../../stores';
import avatar from '../../../../vendor/images/login_ava.png';

import { ProfileShortInfo } from './ProfileShortInfo';

const ProfileShortInfoComponent: React.FC = () => {
  const { isAnonymous, photoURL, email, displayName } = userStore.user;

  const title = isAnonymous
    ? 'Гость'
    : `${displayName || email || 'Гость'}`;

  return (<ProfileShortInfo photoUrl={photoURL || ANONYMOUS_USER_DEFAULT_AVATAR || avatar} title={title} />);
};

ProfileShortInfoComponent.displayName = 'ProfileShortInfoComponent';

const ObservableProfileShortInfoComponent = observer(ProfileShortInfoComponent);

export { ObservableProfileShortInfoComponent as ProfileShortInfo };
