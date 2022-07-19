import React from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { profileActions } from '../../redux/slices/profileSlice';
import { selectProfileMenuState, selectUserData } from '../../redux/store';

import { Profile } from './Profile';

const ProfileComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const isMenuOpened = useAppSelector(selectProfileMenuState);
  const userData = useAppSelector(selectUserData);

  const handleClickOnMenuButton = () => { dispatch(profileActions.toggleMenu()); };
  const title = userData?.isAnonymous
    ? 'Привет, Незнакомец'
    : `Привет, ${userData?.displayName || 'Безымянный Гость'}`;

  return (
    <Profile
      isAnonymous={userData?.isAnonymous ?? true}
      isMenuOpened={isMenuOpened}
      title={title}
      onDelete={() => {}}
      onLogout={() => {}}
      onProfileClick={handleClickOnMenuButton}
    />
  );
};

ProfileComponent.displayName = 'ProfileComponent';

export { ProfileComponent };
