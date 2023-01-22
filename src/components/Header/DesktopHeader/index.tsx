import React, { memo, useCallback, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { CLEAR_SEARCH_VALUE_DELAY } from '../../../constants';
import { useClickOutside } from '../../../hooks';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { headerActions } from '../../../redux/slices';
import { selectHeaderActionsState } from '../../../redux/store';
import { routes } from '../../../routesMap';
import { HeaderMenu } from '../partials';

import { DesktopHeader } from './DesktopHeader';

const DesktopHeaderComponent: React.FC = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const { closeMenu } = headerActions;
  const { isMenuOpened } = useAppSelector(selectHeaderActionsState);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const isSearchAvailable = useMemo(() => pathname === routes.books, [pathname]);

  const useClickOutsideEffect = useCallback(() => {
    if (isMenuOpened) {
      const timeout = setTimeout(() => {
        dispatch(closeMenu());
        clearTimeout(timeout);
      }, CLEAR_SEARCH_VALUE_DELAY);
    }
  }, [closeMenu, dispatch, isMenuOpened]);

  useClickOutside(useClickOutsideEffect, [menuRef]);

  return (
    <>
      <DesktopHeader isSearchAvailable={isSearchAvailable} />
      <HeaderMenu menuRef={menuRef} />
    </>
  );
};

const MemoDesktopHeaderComponent = memo(DesktopHeaderComponent);

export { MemoDesktopHeaderComponent as DesktopHeader };
