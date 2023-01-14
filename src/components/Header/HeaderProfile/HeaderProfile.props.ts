import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export type THeaderProfileProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  title: string,
  onLogout: () => void,
  onDelete: () => void,
  onProfileClick: () => void,
  isMenuOpened: boolean,
  isAnonymous: boolean,
  photoUrl: string,
  menuButtonRef: React.MutableRefObject<HTMLButtonElement | null>
};
