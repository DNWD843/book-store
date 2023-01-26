import React from 'react';

export type TMobileHeaderProps = {
  isSearchFilterVisible: boolean,
  isMenuVisible: boolean,
  searchFilterRef: React.MutableRefObject<HTMLDivElement | null>
  menuRef: React.MutableRefObject<HTMLDivElement | null>
};
