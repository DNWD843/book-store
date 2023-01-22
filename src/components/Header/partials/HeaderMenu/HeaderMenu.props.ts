import React from 'react';

export type THeaderMenuProps = {
  isMenuOpened: boolean,
  isShortInfoVisible: boolean,
  menuRef: React.MutableRefObject<HTMLDivElement | null>,
};
