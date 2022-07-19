import React from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { profileActions } from '../../redux/slices/profileSlice';
import { selectProfileMenuState } from '../../redux/store';

import { Profile } from './Profile';

const ProfileComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const isMenuOpened = useAppSelector(selectProfileMenuState);
  const handleClickOnMenuButton = () => { dispatch(profileActions.toggleMenu()); };

  return (
    <Profile
      isMenuOpened={isMenuOpened}
      title="Гость"
      onDelete={() => {}}
      onLogout={() => {}}
      onProfileClick={handleClickOnMenuButton}
    />
  );
};

ProfileComponent.displayName = 'ProfileComponent';

export { ProfileComponent };
