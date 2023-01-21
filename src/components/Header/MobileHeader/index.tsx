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
  const [isSearchFilterVisible, setSearchFilterVisible] = useState<boolean>(false);
  const { isTablet } = useMatchMedia();
  const searchFilterRef = useRef(null);

  const showSearchFilter = useCallback(() => { setSearchFilterVisible(true); }, []);

  const hideSearchFilter = useCallback(() => {
    setSearchFilterVisible(false);
    dispatch(clearSearchValue());
  }, [clearSearchValue, dispatch]);

  const isSearchAvailable = useMemo(() => pathname === routes.books, [pathname]);

  const hideBookSearchEffect = useCallback(() => {
    if (isSearchFilterVisible) {
      const timeout = setTimeout(() => {
        hideSearchFilter();
        clearTimeout(timeout);
      }, CLEAR_SEARCH_VALUE_DELAY);
    }
  }, [hideSearchFilter, isSearchFilterVisible]);

  useClickOutside(hideBookSearchEffect, [searchFilterRef]);

  return (
    <MobileHeader
      isMenuVisible={false}
      isSearchAvailable={isSearchAvailable}
      isSearchFilterVisible={isSearchFilterVisible}
      isTablet={isTablet}
      searchFilterRef={searchFilterRef}
      showSearchFilter={showSearchFilter}
    />
  );
};

MobileHeaderComponent.displayName = 'MobileHeaderComponent';

const MemoMobileHeader = memo(MobileHeaderComponent);

export { MemoMobileHeader as MobileHeader };
