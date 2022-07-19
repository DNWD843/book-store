import React, { useState } from 'react';

import { Profile } from './Profile';

const ProfileComponent: React.FC = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Profile
      isMenuOpened={opened}
      title="Гость"
      onDelete={() => {}}
      onLogout={() => {}}
      onProfileClick={() => { setOpened(!opened); }}
    />
  );
};

ProfileComponent.displayName = 'ProfileComponent';

export { ProfileComponent };
