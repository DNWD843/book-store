import React from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { profileActions } from '../../redux/slices/profileSlice';
import { userSavingsActions } from '../../redux/slices/userSavingsSlice';
import { selectProfileMenuState, selectUserData, storageActions } from '../../redux/store';
import { auth } from '../../redux/thunks';
import { storageKeys, storage } from '../../utils';
import ava from '../../vendor/images/login_ava.png';

import { Profile } from './Profile';

const ProfileComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { removeUserSavingsFromStore } = userSavingsActions;
  const isMenuOpened = useAppSelector(selectProfileMenuState);
  const userData = useAppSelector(selectUserData);

  const handleClickOnMenuButton = () => { dispatch(profileActions.toggleMenu()); };
  const title = userData?.isAnonymous
    ? 'Гость'
    : `Привет, ${userData?.displayName || userData?.email || 'Гость'}`;

  const handleLogout = () => {
    dispatch(auth.logoutUser())
      .then(() => { dispatch(removeUserSavingsFromStore()); })
      .then(() => {
        storage.deleteData([storageKeys.USER, storageKeys.USER_SAVINGS]);
        dispatch(storageActions.removeUserData);
      })
      .then(() => { dispatch(profileActions.toggleMenu()); })
      .catch((err) => { console.error(err); });
  };

  return (
    <Profile
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

ProfileComponent.displayName = 'ProfileComponent';

export { ProfileComponent };
