import React from 'react';

export type TMobileHeaderProps = {
  isSearchFilterVisible: boolean,
  isSearchAvailable: boolean,
  isMenuVisible: boolean,
  showSearchFilter: () => void,
  // hideSearchFilter: () => void,
  isTablet: boolean,
  searchFilterRef: React.MutableRefObject<HTMLDivElement | null>
};
