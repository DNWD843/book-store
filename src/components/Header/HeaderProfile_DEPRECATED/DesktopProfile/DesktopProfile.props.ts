import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export type TDesktopProfileProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  title: string,
  onLogout: () => void,
  onDelete: () => void,
  onProfileClick: () => void,
  isMenuOpened: boolean,
  isAnonymous: boolean,
  photoUrl: string,
  menuButtonRef: React.MutableRefObject<HTMLButtonElement | null>
  isAdmin: boolean,
  onUpdateBooksCatalogue: () => void
};
