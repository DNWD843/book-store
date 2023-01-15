import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

import { TBookInfo } from '../../../types';

export type THeaderProfileProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
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
