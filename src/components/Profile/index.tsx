import React from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { profileActions } from '../../redux/slices/profileSlice';
import { selectProfileMenuState, selectUserData } from '../../redux/store';
import { auth } from '../../redux/thunks';
import { storageKeys, storage } from '../../utils';
import ava from '../../vendor/images/login_ava.png';

import { Profile } from './Profile';

const ProfileComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const isMenuOpened = useAppSelector(selectProfileMenuState);
  const userData = useAppSelector(selectUserData);

  const handleClickOnMenuButton = () => { dispatch(profileActions.toggleMenu()); };
  const title = userData?.isAnonymous
    ? 'Гость'
    : `Привет, ${userData?.displayName || 'Гость'}`;

  const handleLogout = async () => {
    storage.deleteData(storageKeys.USER);
    await dispatch(auth.logoutUser());
    dispatch(profileActions.toggleMenu());
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
