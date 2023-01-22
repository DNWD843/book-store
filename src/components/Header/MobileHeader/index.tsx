import React, { memo, useCallback, useRef } from 'react';

import { CLEAR_SEARCH_VALUE_DELAY } from '../../../constants';
import { useClickOutside } from '../../../hooks';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { booksActions, headerActions } from '../../../redux/slices';
import { selectHeaderActionsState } from '../../../redux/store';
import { BookSearchFilter } from '../../BookSearchFilter';
import { HeaderMenu } from '../partials/HeaderMenu';

import { MobileHeader } from './MobileHeader';

const MobileHeaderComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { closeMenu, closeSearchFilter } = headerActions;
  const { clearSearchValue } = booksActions;
  const { isMenuOpened, isSearchFilterOpened } = useAppSelector(selectHeaderActionsState);

  const searchFilterRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const useClickOutsideEffect = useCallback(() => {
    if (isSearchFilterOpened) {
      const timeout = setTimeout(() => {
        dispatch(closeSearchFilter());
        dispatch(clearSearchValue());
        clearTimeout(timeout);
      }, CLEAR_SEARCH_VALUE_DELAY);
    }

    if (isMenuOpened) {
      const timeout = setTimeout(() => {
        dispatch(closeMenu());
        clearTimeout(timeout);
      }, CLEAR_SEARCH_VALUE_DELAY);
    }
  }, [clearSearchValue, closeMenu, closeSearchFilter, dispatch, isMenuOpened, isSearchFilterOpened]);

  useClickOutside(useClickOutsideEffect, [searchFilterRef, menuRef]);

  return (
    <>
      <MobileHeader />
      <BookSearchFilter searchFilterRef={searchFilterRef} />
      <HeaderMenu menuRef={menuRef} />
    </>
  );
};

MobileHeaderComponent.displayName = 'MobileHeaderComponent';

const MemoMobileHeader = memo(MobileHeaderComponent);

export { MemoMobileHeader as MobileHeader };
