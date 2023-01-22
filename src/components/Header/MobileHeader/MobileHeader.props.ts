import React from 'react';

export type TMobileHeaderProps = {
  isSearchFilterVisible: boolean,
  isSearchAvailable: boolean,
  isMenuVisible: boolean,
  showSearchFilter: () => void,
  showMenu: () => void,
  isTablet: boolean,
  searchFilterRef: React.MutableRefObject<HTMLDivElement | null>
  menuRef: React.MutableRefObject<HTMLDivElement | null>
};
