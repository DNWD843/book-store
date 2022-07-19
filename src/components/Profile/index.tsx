import React from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { profileActions } from '../../redux/slices/profileSlice';
import { selectProfileMenuState, selectUserData } from '../../redux/store';
import { auth } from '../../redux/thunks';
import { keys, storage } from '../../utils';

import { Profile } from './Profile';

const ProfileComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const isMenuOpened = useAppSelector(selectProfileMenuState);
  const userData = useAppSelector(selectUserData);

  const handleClickOnMenuButton = () => { dispatch(profileActions.toggleMenu()); };
  const title = userData?.isAnonymous
    ? 'Привет, Незнакомец'
    : `Привет, ${userData?.displayName || 'Безымянный Гость'}`;

  const handleLogout = async () => {
    storage.deleteData(keys.REGISTERED_USER);
    await dispatch(auth.logoutUser());
    dispatch(profileActions.toggleMenu());
  };

  return (
    <Profile
      isAnonymous={userData?.isAnonymous ?? true}
      isMenuOpened={isMenuOpened}
      title={title}
      onDelete={() => {}}
      onLogout={handleLogout}
      onProfileClick={handleClickOnMenuButton}
    />
  );
};

ProfileComponent.displayName = 'ProfileComponent';

export { ProfileComponent };
