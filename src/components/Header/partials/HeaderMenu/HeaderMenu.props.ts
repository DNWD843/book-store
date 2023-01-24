import React from 'react';

export type THeaderMenuProps = {
  isMenuOpened: boolean,
  isDesktop: boolean,
  isAnonymous: boolean,
  menuRef: React.MutableRefObject<HTMLDivElement | null>,
};
