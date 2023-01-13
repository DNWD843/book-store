import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { userSavingsActions } from '../../../redux/slices';
import { selectUserData, storageActions } from '../../../redux/store';
import { auth } from '../../../redux/thunks';
import { storageKeys, storage } from '../../../utils';
import ava from '../../../vendor/images/login_ava.png';

import { HeaderProfile } from './HeaderProfile';

const HeaderProfileComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { removeUserSavingsFromStore } = userSavingsActions;
  const userData = useAppSelector(selectUserData);

  const [isMenuOpened, setMenuOpened] = useState<boolean>(false);

  const handleClickOnMenuButton = () => { setMenuOpened((prev) => !prev); };

  const title = userData?.isAnonymous
    ? 'Гость'
    : `Привет, ${userData?.displayName || userData?.email || 'Гость'}`;

  const handleLogout = () => {
    dispatch(auth.logoutUser())
      .then(() => { dispatch(removeUserSavingsFromStore()); })
      .then(() => {
        storage.deleteData([storageKeys.USER, storageKeys.USER_SAVINGS]);
        dispatch(storageActions.removeUserInfo);
      })
      .then(() => { setMenuOpened(false); })
      // eslint-disable-next-line no-console
      .catch((err) => { console.error(err); });
  };

  return (
    <HeaderProfile
      isAnonymous={userData?.isAnonymous}
      isMenuOpened={isMenuOpened}
      photoUrl={userData?.photoURL || ava}
      title={title}
      onDelete={() => {}}
      onLogout={handleLogout}
      onProfileClick={handleClickOnMenuButton}
    />
  );
};

HeaderProfileComponent.displayName = 'HeaderProfileComponent';

export { HeaderProfileComponent };
