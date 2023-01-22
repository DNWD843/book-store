import React, { memo, useCallback, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { CLEAR_SEARCH_VALUE_DELAY } from '../../../constants';
import { useClickOutside, useMatchMedia } from '../../../hooks';
import { useAppDispatch } from '../../../redux/hooks';
import { booksActions } from '../../../redux/slices';
import { routes } from '../../../routesMap';

import { MobileHeader } from './MobileHeader';

const MobileHeaderComponent: React.FC = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const { clearSearchValue } = booksActions;
  const { isTablet } = useMatchMedia();
  const searchFilterRef = useRef(null);
  const menuRef = useRef(null);

  const [isSearchFilterVisible, setSearchFilterVisible] = useState<boolean>(false);
  const [isMenuVisible, setMenuVisible] = useState<boolean>(false);

  const isSearchAvailable = useMemo(() => pathname === routes.books, [pathname]);

  const showSearchFilter = useCallback(() => { setSearchFilterVisible(true); }, []);
  const hideSearchFilter = useCallback(() => {
    setSearchFilterVisible(false);
    dispatch(clearSearchValue());
  }, [clearSearchValue, dispatch]);

  const showMenu = useCallback(() => { setMenuVisible(true); }, []);
  const hideMenu = useCallback(() => { setMenuVisible(false); }, []);

  const hideBookSearchEffect = useCallback(() => {
    if (isSearchFilterVisible) {
      const timeout = setTimeout(() => {
        hideSearchFilter();
        clearTimeout(timeout);
      }, CLEAR_SEARCH_VALUE_DELAY);
    }

    if (isMenuVisible) {
      const timeout = setTimeout(() => {
        hideMenu();
        clearTimeout(timeout);
      }, CLEAR_SEARCH_VALUE_DELAY);
    }
  }, [hideMenu, hideSearchFilter, isMenuVisible, isSearchFilterVisible]);

  useClickOutside(hideBookSearchEffect, [searchFilterRef, menuRef]);

  return (
    <MobileHeader
      isMenuVisible={isMenuVisible}
      isSearchAvailable={isSearchAvailable}
      isSearchFilterVisible={isSearchFilterVisible}
      isTablet={isTablet}
      menuRef={menuRef}
      searchFilterRef={searchFilterRef}
      showMenu={showMenu}
      showSearchFilter={showSearchFilter}
    />
  );
};

MobileHeaderComponent.displayName = 'MobileHeaderComponent';

const MemoMobileHeader = memo(MobileHeaderComponent);

export { MemoMobileHeader as MobileHeader };
